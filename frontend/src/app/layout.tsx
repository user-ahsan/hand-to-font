import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hand to Font - Turn Your Handwriting into Fonts",
  description: "Upload your handwriting sample, and our AI converts it into a professional font you can use anywhere.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
