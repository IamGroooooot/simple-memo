import type { ReactNode } from 'react'
import './globals.css'

export const metadata = { title: '메모', description: '메모를 저장하는 가장 작은 앱' }

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
