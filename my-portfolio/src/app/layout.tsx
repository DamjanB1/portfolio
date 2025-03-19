import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"; // Import Navbar component
import Footer from "./components/Footer"; // Import Footer component
import ScrollToTop from "./components/ScrollToTop"; // Import ScrollToTop component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Export metadata for the page
export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Welcome to my portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicon link */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar /> {/* Use the Navbar component here */}
        {/* Main content */}
        <main>{children}</main>
        <ScrollToTop />
        {/* Footer */}
        <Footer /> {/* Use the Footer component here */}
      </body>
    </html>
  );
}
