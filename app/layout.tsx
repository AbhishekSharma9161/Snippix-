import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Snippix",
  description:
    "Snippix is a tool that allows you to create beautiful code snippets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        <Toaster toastOptions={{ className: "toast" }} />
        {children}
      </body>
    </html>
  );
}
