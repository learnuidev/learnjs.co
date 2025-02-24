import { NavBar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { I18NextHtmlProvider } from "@/lib/i18n-next/i18n-next-html-provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "learnjs.co | Master JavaScript",
  description: "making js education practical and fun",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <I18NextHtmlProvider>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-100 dark:bg-[rgb(23,24,25)]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="px-6 pt-4">
            <NavBar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </I18NextHtmlProvider>
  );
}
