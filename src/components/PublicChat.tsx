"use client";

import { useState, useEffect, useRef } from "react";
import { getComments, postComment } from "@/app/actions/chat";
import { MessageSquare, Send, ShieldCheck, Clock, Reply, CheckCircle2, Trash2 } from "lucide-react";

type Comment = {
  id: number;
  message: string;
  isAdminReply: boolean;
  replyToId: number | null;
  createdAt: Date;
};

const CommentNode = ({ 
  comment, 
  allComments, 
  depth = 0, 
  replyingTo,
  setReplyingTo,
  replyMessage,
  setReplyMessage,
  handleReply,
  isReplying, 
  formatDate 
}: any) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const children = allComments.filter((c: any) => c.replyToId === comment.id);
  const visibleChildren = isExpanded ? children : children.slice(0, 2);
  const hasMore = children.length > 2;

  return (
    <div className={`flex flex-col items-start w-full ${depth > 0 ? 'mt-4' : 'mb-4'}`}>
      
      {/* Current Comment */}
      <div className="flex flex-col items-start w-full max-w-[95%]">
        <div className="flex items-center gap-1.5 pl-1">
          <span className="font-bold text-[11px] md:text-xs text-slate-500">
            {comment.isAdminReply ? <span className="text-blue-600 flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> RuangLayananWeb</span> : "Anonim"}
          </span>
          <span className="text-[9px] md:text-[10px] text-slate-400">
            • {formatDate(comment.createdAt)}
          </span>
        </div>
        <div className={`pl-1 mt-0.5 ${comment.isAdminReply ? 'text-slate-900 font-medium' : 'text-slate-800'}`}>
          <p className="whitespace-pre-wrap text-[13px] md:text-[15px] leading-snug">{comment.message}</p>
        </div>
        
        {/* Tombol Aksi */}
        <div className="flex items-center gap-3 mt-1">
          <button 
            onClick={() => {
              setReplyingTo(replyingTo === comment.id ? null : comment.id);
              setReplyMessage("");
            }}
            className="text-[11px] text-slate-400 hover:text-blue-600 flex items-center gap-1 pl-1 transition-colors"
          >
            <Reply className="w-3 h-3" /> Balas
          </button>
        </div>
        
        {/* Form Balas */}
        {replyingTo === comment.id && (
          <form onSubmit={handleReply} className="mt-2 w-full max-w-sm bg-slate-100 border border-slate-200 p-3 rounded-xl">
            <textarea
              placeholder="Ketik balasan..."
              value={replyMessage}
              onChange={(e) => setReplyMessage(e.target.value)}
              className="w-full text-slate-900 text-sm px-3 py-2 rounded-lg border border-slate-200 mb-2 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
              rows={2}
              required
            />
            <div className="flex justify-end gap-2">
              <button type="button" onClick={() => setReplyingTo(null)} className="text-xs text-slate-500 px-3 py-1.5 hover:bg-slate-200 rounded-lg">Batal</button>
              <button type="submit" disabled={isReplying} className="text-xs bg-slate-800 text-white px-3 py-1.5 rounded-lg hover:bg-slate-900 disabled:opacity-50">
                {isReplying ? "Mengirim..." : "Kirim Balasan"}
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Render Balasan (Anak Tangga) */}
      {children.length > 0 && (
        <div className="w-full flex flex-col mt-2 pl-3 md:pl-4 ml-1.5 md:ml-2 border-l-2 border-slate-200">
          {visibleChildren.map((child: any) => (
            <CommentNode 
              key={child.id}
              comment={child}
              allComments={allComments}
              depth={depth + 1}
              replyingTo={replyingTo}
              setReplyingTo={setReplyingTo}
              replyMessage={replyMessage}
              setReplyMessage={setReplyMessage}
              handleReply={handleReply}
              isReplying={isReplying}
              formatDate={formatDate}
            />
          ))}
          {!isExpanded && hasMore && (
            <button 
              onClick={() => setIsExpanded(true)}
              className="text-[11px] text-blue-600 font-semibold hover:underline text-left mt-2 pl-1"
            >
              Lihat {children.length - 2} balasan lainnya...
            </button>
          )}
          {isExpanded && hasMore && (
            <button 
              onClick={() => setIsExpanded(false)}
              className="text-[11px] text-slate-500 font-semibold hover:underline text-left mt-2 pl-1"
            >
              Sembunyikan balasan
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default function PublicChat() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Chat Visibility State
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  // Reply State
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [replyMessage, setReplyMessage] = useState("");
  const [isReplying, setIsReplying] = useState(false);

  const chatEndRef = useRef<HTMLDivElement>(null);

  const fetchComments = async () => {
    const res = await getComments();
    if (res.success && res.data) {
      setComments(res.data as Comment[]);
    }
  };

  useEffect(() => {
    fetchComments();
    const interval = setInterval(fetchComments, 10000);
    return () => clearInterval(interval);
  }, []);

  const handlePost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    
    setIsSubmitting(true);
    const res = await postComment(newMessage);
    if (res.success) {
      setNewMessage("");
      await fetchComments();
    }
    setIsSubmitting(false);
  };

  const handleReply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyingTo || !replyMessage.trim()) return;
    
    setIsReplying(true);
    const res = await postComment(replyMessage, replyingTo);
    
    if (res.success) {
      setReplyMessage("");
      setReplyingTo(null);
      await fetchComments();
    }
    setIsReplying(false);
  };



  const formatDate = (dateString: Date) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("id-ID", {
      weekday: "long",
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  // Mengelompokkan komentar utama dan balasannya
  const mainComments = comments.filter((c) => !c.replyToId);
  const replies = comments.filter((c) => c.replyToId);

  return (
    <section className="py-8 md:py-12 bg-slate-50 relative overflow-hidden" id="diskusi">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-100/50 blur-[100px]" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-indigo-100/50 blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-1.5 tracking-tight">
            Tanya Kami
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-lg mx-auto">
            Ada pertanyaan? Sampaikan secara anonim di sini.
          </p>
          <button 
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="mt-4 px-6 py-2.5 bg-slate-800 hover:bg-slate-900 text-white text-sm font-bold rounded-full inline-flex items-center gap-2 transition-all shadow-md active:scale-95"
          >
            <MessageSquare className="w-4 h-4" />
            {isChatOpen ? "Tutup Live Diskusi" : "Mulai Live Diskusi Publik"}
          </button>
        </div>

        {isChatOpen && (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex flex-col h-[75dvh] md:h-[500px] animate-in fade-in zoom-in-95 duration-200">
          
          {/* Header */}
          <div className="bg-slate-800 p-4 px-6 flex items-center gap-3 text-white">
            <MessageSquare className="w-5 h-5 text-blue-400" />
            <h3 className="font-semibold">Live Diskusi Publik</h3>
            <div className="ml-auto flex items-center gap-2 text-xs text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Online
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-slate-50/50 space-y-4">
            {mainComments.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-slate-400">
                <MessageSquare className="w-12 h-12 mb-3 opacity-20" />
                <p className="text-sm">Belum ada pertanyaan. Jadilah yang pertama bertanya!</p>
              </div>
            ) : (
              mainComments.map((comment) => (
                <CommentNode 
                  key={comment.id}
                  comment={comment}
                  allComments={comments}
                  depth={0}
                  replyingTo={replyingTo}
                  setReplyingTo={setReplyingTo}
                  replyMessage={replyMessage}
                  setReplyMessage={setReplyMessage}
                  handleReply={handleReply}
                  isReplying={isReplying}
                  formatDate={formatDate}
                />
              ))
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input Area untuk Pengunjung Utama */}
          <div className="p-4 bg-white border-t border-slate-200">
            <form onSubmit={handlePost} className="flex items-end gap-2">
              <div className="flex-1 relative">
                <textarea
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Ketik pertanyaan atau pesan Anda di sini (Anonim)..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  rows={2}
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting || !newMessage.trim()}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl p-3 h-[46px] mb-[2px] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[46px]"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
            <p className="text-[10px] text-slate-400 mt-2 text-center">
              Pesan Anda akan tampil sebagai anonim. Harap gunakan bahasa yang sopan.
            </p>
          </div>
          
        </div>
        )}
      </div>
    </section>
  );
}
