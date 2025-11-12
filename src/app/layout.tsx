import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import ChatBot from "../components/utils/chatbot/Chatbot";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "EIPP VAULT",
  description: "Safeguarding Your Files, Simplifying Your Workflow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Navbar />
        <ChatBot />
        {children}
        <Footer />
      </body>
    </html>
  );
}
