'use client';

import { useState } from 'react';
import { adminReplyToComment, deleteCommentByAdmin } from '@/app/actions/admin-chat';
import { Trash2, MessageCircle, Reply, CheckCircle2, User, ShieldCheck } from 'lucide-react';

export default function ChatManager({ initialComments }: { initialComments: any[] }) {
  const [comments, setComments] = useState(initialComments);
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [expandedThreads, setExpandedThreads] = useState<number[]>([]);
  const [replyText, setReplyText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Group comments into threads
  const parentComments = comments.filter((c) => !c.replyToId);
  const getReplies = (parentId: number) => comments.filter((c) => c.replyToId === parentId);

  const handleDelete = async (id: number) => {
    if (!confirm('Yakin ingin menghapus pesan ini?')) return;
    
    // Optimistic UI update
    setComments(comments.filter(c => c.id !== id));
    
    const res = await deleteCommentByAdmin(id);
    if (!res.success) {
      alert(res.error);
      // Revert if failed (in a real app we'd fetch again or keep original state)
      window.location.reload();
    }
  };

  const handleReplySubmit = async (e: React.FormEvent, parentId: number) => {
    e.preventDefault();
    if (!replyText.trim()) return;

    setIsSubmitting(true);
    const res = await adminReplyToComment(parentId, replyText);
    setIsSubmitting(false);

    if (res.success) {
      setReplyText('');
      setReplyingTo(null);
      // Hard reload to get new data for simplicity, or we could update state
      window.location.reload();
    } else {
      alert(res.error);
    }
  };

  if (parentComments.length === 0) {
    return (
      <div className="bg-slate-900/50 border border-slate-800/60 rounded-2xl p-12 text-center flex flex-col items-center">
        <div className="w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mb-4">
          <MessageCircle size={32} className="text-slate-600" />
        </div>
        <h3 className="text-white font-bold text-lg mb-1">Belum Ada Pesan</h3>
        <p className="text-slate-500 text-sm">Pesan dari pengunjung website akan muncul di sini.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {parentComments.map((comment) => {
        const replies = getReplies(comment.id);
        
        return (
          <div key={comment.id} className="bg-slate-900/40 border border-slate-800/60 rounded-xl md:rounded-2xl overflow-hidden hover:border-slate-700/60 transition-all duration-200 shadow-sm">
            {/* Parent Comment */}
            <div className="p-4 md:p-6">
              <div className="flex items-start justify-between gap-3 md:gap-4">
                <div className="flex items-start gap-3 md:gap-4 flex-1">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-800/50 flex items-center justify-center shrink-0 border border-slate-700/50 mt-0.5">
                    {comment.isAdminReply ? <ShieldCheck size={16} className="text-blue-400" /> : <User size={16} className="text-slate-400" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-0.5 md:gap-2 mb-1">
                      <span className={`font-bold text-xs md:text-sm ${comment.isAdminReply ? 'text-blue-400' : 'text-slate-200'}`}>
                        {comment.isAdminReply ? 'Admin RuangWeb' : 'Pengunjung Anonim'}
                      </span>
                      <span className="text-slate-500 text-[10px] md:text-xs">
                        {new Date(comment.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed whitespace-pre-wrap mt-1">
                      {comment.message}
                    </p>
                    
                    {/* Expand/Collapse Toggle */}
                    {replies.length > 0 && (
                      <button 
                        onClick={() => setExpandedThreads(prev => prev.includes(comment.id) ? prev.filter(id => id !== comment.id) : [...prev, comment.id])}
                        className="text-[10px] md:text-xs text-blue-400 hover:text-blue-300 font-semibold mt-3 flex items-center gap-1 transition-colors"
                      >
                        {expandedThreads.includes(comment.id) ? 'Sembunyikan Balasan' : `Lihat ${replies.length} Balasan`}
                      </button>
                    )}
                  </div>
                </div>
                
                {/* Actions */}
                <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2 shrink-0">
                  <button 
                    onClick={() => {
                      setReplyingTo(replyingTo === comment.id ? null : comment.id);
                      if (!expandedThreads.includes(comment.id)) setExpandedThreads(prev => [...prev, comment.id]);
                    }}
                    className="p-1.5 md:p-2 text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors"
                    title="Balas pesan ini"
                  >
                    <Reply size={16} />
                  </button>
                  <button 
                    onClick={() => handleDelete(comment.id)}
                    className="p-1.5 md:p-2 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                    title="Hapus pesan"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Replies Section (Accordion) */}
            {replies.length > 0 && expandedThreads.includes(comment.id) && (
              <div className="bg-slate-950/60 border-t border-slate-800/60 p-3 md:p-5 space-y-3 md:space-y-4">
                {replies.map(reply => (
                  <div key={reply.id} className="flex items-start justify-between gap-3 pl-2 md:pl-8 border-l-2 border-slate-700/50 ml-4 md:ml-6">
                    <div className="flex items-start gap-2.5 md:gap-3">
                      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20 mt-0.5">
                        {reply.isAdminReply ? <ShieldCheck size={12} className="text-blue-400" /> : <User size={12} className="text-slate-400" />}
                      </div>
                      <div>
                        <div className="flex flex-col md:flex-row md:items-center gap-0.5 md:gap-2 mb-0.5">
                          <span className={`font-bold text-[11px] md:text-sm ${reply.isAdminReply ? 'text-blue-400' : 'text-slate-300'}`}>
                            {reply.isAdminReply ? 'Admin RuangWeb' : 'Pengunjung'}
                          </span>
                          <span className="text-slate-600 text-[9px] md:text-xs">
                            {new Date(reply.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>
                        <p className="text-slate-300 text-[11px] md:text-sm leading-relaxed whitespace-pre-wrap">
                          {reply.message}
                        </p>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => handleDelete(reply.id)}
                      className="p-1.5 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors shrink-0"
                      title="Hapus balasan"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Reply Input Box */}
            {replyingTo === comment.id && (
              <div className="bg-slate-950/90 border-t border-slate-800/60 p-3 md:p-5">
                <form onSubmit={(e) => handleReplySubmit(e, comment.id)} className="flex items-start gap-2.5 md:gap-4 pl-2 md:pl-8 ml-4 md:ml-6">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20 mt-1">
                    <ShieldCheck size={12} className="text-blue-400" />
                  </div>
                  <div className="flex-1 space-y-2.5">
                    <textarea 
                      autoFocus
                      rows={2}
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      placeholder="Tulis balasan Anda sebagai Admin..."
                      className="w-full bg-slate-900 border border-slate-700/60 text-white text-xs md:text-sm rounded-xl p-2.5 md:p-3 focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all placeholder:text-slate-600 resize-none"
                    />
                    <div className="flex items-center gap-2 justify-end">
                      <button 
                        type="button"
                        onClick={() => { setReplyingTo(null); setReplyText(''); }}
                        className="px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-xs font-bold text-slate-400 hover:text-white transition-colors"
                      >
                        Batal
                      </button>
                      <button 
                        type="submit"
                        disabled={isSubmitting || !replyText.trim()}
                        className="flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-[10px] md:text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white transition-all disabled:opacity-50"
                      >
                        {isSubmitting ? 'Mengirim...' : 'Kirim Balasan'}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
