import { db } from '@/lib/db';
import { publicComments } from '@/db/schema';
import { asc } from 'drizzle-orm';
import ChatManager from './ChatManager';

export const dynamic = 'force-dynamic';

export default async function AdminChatPage() {
  const allComments = await db.select().from(publicComments).orderBy(asc(publicComments.createdAt));

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">Pesan & Chat Publik</h1>
        <p className="text-slate-500 text-sm mt-1">
          Kelola pertanyaan dan diskusi dari pengunjung website.
        </p>
      </div>

      {/* Chat Manager Component */}
      <ChatManager initialComments={allComments} />
    </div>
  );
}
