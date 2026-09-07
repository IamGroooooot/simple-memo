'use server'

import { revalidatePath } from 'next/cache'
import { db } from '@/db'
import { memos } from '@/db/schema'

export async function addMemo(formData: FormData) {
  const body = String(formData.get('body') ?? '').trim()
  if (!body) return
  await db.insert(memos).values({ body: body.slice(0, 200) })
  revalidatePath('/')
}
