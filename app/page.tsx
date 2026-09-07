import { desc } from 'drizzle-orm'
import { db } from '@/db'
import { memos } from '@/db/schema'
import { addMemo } from './actions'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const rows = await db.select().from(memos).orderBy(desc(memos.id)).limit(50)
  return (
    <main>
      <h1>메모</h1>
      <form action={addMemo}>
        <input name="body" placeholder="한 줄 적고 Enter" maxLength={200} autoComplete="off" required />
        <button type="submit">저장</button>
      </form>
      {rows.length === 0 ? <p className="empty">아직 메모가 없습니다.</p> : null}
      <ul>
        {rows.map((m) => (
          <li key={m.id}>
            <span>{m.body}</span>
            <time>{m.createdAt.toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })}</time>
          </li>
        ))}
      </ul>
    </main>
  )
}
