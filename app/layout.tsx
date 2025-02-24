import { NavBar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { I18NextHtmlProvider } from "@/libs/i18n-next/i18n-next-html-provider";
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
  title: "learn javascript",
  description: "learn javascript, interactively",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <I18NextHtmlProvider>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
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
