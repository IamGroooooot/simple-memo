import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'

/* DB 설계도. 여기를 고친 뒤 `npm run db:generate` → `npm run db:migrate` 순서로 DB에 반영한다. */
export const memos = pgTable('memos', {
  id: serial('id').primaryKey(),
  body: text('body').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
})
