import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { ScoreProvider } from './context/ScoreContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WhatBytes Dashboard',
  description: 'Skill test dashboard for WhatBytes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScoreProvider>
          <Header />
          <div className="flex bg-white">
            <Sidebar />
            <main className="p-8">
              {children}
            </main>
          </div>
        </ScoreProvider>
      </body>
    </html>
  )
}

