# 이 저장소에서 작업할 때

- DB 구조는 `db/schema.ts`에서만 바꾼다. Supabase 화면에서 table을 직접 만들거나 고치지 않는다.
- 순서는 `npm run db:generate` → 만들어진 SQL 읽기 → `npm run db:migrate`. DB 먼저, 코드 push는 나중.
- `DATABASE_URL` 값은 `.env`에만 둔다. 채팅, commit, 화면에 값을 출력하지 않는다. 확인할 때는 host 앞부분만 본다.
- `db:push`, `DROP`, `TRUNCATE`, `DELETE`는 실행하지 않는다.
- Vercel, Supabase는 MCP로 확인한다. 바꾸는 도구(배포 삭제, 프로젝트 일시정지, SQL 실행)는 사람이 허용할 때만 쓴다.
