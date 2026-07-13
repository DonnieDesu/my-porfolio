import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Don Piedro F. Ramirez - Software Developer & Cybersecurity Professional',
  description: 'Professional portfolio of Don Piedro F. Ramirez - Computer Engineering Technology graduate passionate about software development, IT infrastructure, and cybersecurity.',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  keywords: 'Software Developer, Cybersecurity, IT Professional, Junior Developer, Web Developer, SOC Analyst, Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-primary text-white antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
