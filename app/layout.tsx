import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hillary Anne Lehmann - Artist',
  description: 'Contemporary artist working in acrylic on canvas and black ink on paper. Explore original artwork, prints, and commissions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
