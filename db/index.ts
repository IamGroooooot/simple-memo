import postgres from 'postgres'
import { drizzle } from 'drizzle-orm/postgres-js'
import * as schema from './schema'

const url = process.env.DATABASE_URL
if (!url) throw new Error('DATABASE_URL 이 없습니다. .env 를 확인하세요.')

export const db = drizzle(postgres(url, { ssl: 'require', prepare: false, max: 3 }), { schema })
