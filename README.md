# simple-memo

메모를 한 줄씩 저장하는 가장 작은 앱입니다. Next.js, Drizzle, Postgres(Supabase)로 만들었고 Vercel에 배포합니다.

## 구조

| 파일 | 역할 |
|---|---|
| `db/schema.ts` | DB 설계도. `memos` table 하나 |
| `drizzle/*.sql` | 설계도에서 만든 변경 지시서 |
| `app/page.tsx` | 메모 목록과 입력 칸 |
| `app/actions.ts` | 메모 저장 |
| `.mcp.json` | Vercel, Supabase MCP 연결 설정. Claude Code에서 `/mcp`로 로그인 |
| `.env.example` | 필요한 환경 변수 이름. 값은 `.env`에만 |

## 처음 실행

1. `.env.example`을 복사해 `.env`를 만들고 `DATABASE_URL`을 채웁니다. Supabase 화면 **Connect → Transaction pooler** 값입니다.
2. `npm install`
3. `npm run db:migrate` — DB에 `memos` table이 생깁니다.
4. `npm run dev` — <http://localhost:3000>

## 배포

1. GitHub에 push합니다.
2. Vercel에서 이 저장소로 프로젝트를 만듭니다.
3. Vercel 프로젝트 **Settings → Environment Variables**에 `DATABASE_URL`을 넣습니다.
4. 다시 push하거나 Redeploy합니다.

## DB 구조 바꾸기

`db/schema.ts`를 고친 뒤 `npm run db:generate`로 SQL을 만들고 읽어 본 다음 `npm run db:migrate`로 적용합니다. 그다음 코드를 push합니다.
