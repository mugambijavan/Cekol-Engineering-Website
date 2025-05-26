import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Cekol Engineering Ltd',
  description: 'Engineering the Impossible, Making it Possible',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}