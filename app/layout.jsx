import '@/styles/globals.scss';
import { Inter } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
});

export default function RootLayout({children}) {

  return (
    <html lang='ru'>
        <body>
            <main className={inter.className}>
                { children }
            </main>
        </body>
    </html>
  )
}
