
import type { Metadata } from "next";
import "./globals.css";
import { PageTransitionProvider } from "@/contexts/PageTransitionContext";
import PageTransitionWrapper from "@/components/PageTransitionWrapper";

export const metadata: Metadata = {
  title: "Branzyne",
  description: "Branzyne",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body
        className="antialiased min-h-screen overflow-x-hidden"
      >
        <PageTransitionProvider>
          <PageTransitionWrapper>
            {children}
          </PageTransitionWrapper>
        </PageTransitionProvider>
      </body>
    </html>
  );
}
