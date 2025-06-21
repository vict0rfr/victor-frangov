import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Victor Frangov",
  description: "My portfolio website in a classic Win95 fashion",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
