import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Dự án Tnext TSA 100% - Tuyển dụng CTV',
  description: 'Tham gia dự án Tnext TSA 100% - Cơ hội tuyển dụng cộng tác viên với hoa hồng cao 2%. Hướng dẫn đăng ký CTV chi tiết và đơn giản.',
  generator: 'Tnext TSA',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
