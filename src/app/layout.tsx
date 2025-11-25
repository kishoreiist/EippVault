import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import ChatBot from "../components/utils/chatbot/Chatbot";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "EIPP VAULT",
  description: "Safeguarding Your Files, Simplifying Your Workflow.",
  other: {
    "google-site-verification": "Fz5jk751Qu-MNL3miTpntOP3387VW7VIHl_yI8ZeVyI",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>

        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NGRTZSR3');
          `}
        </Script>

      </head>

      <body className={`${poppins.className} antialiased`}>

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NGRTZSR3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>


        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-N87408XEZF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N87408XEZF');
          `}
        </Script>

        <Navbar />
        <ChatBot />
        {children}
        <Footer />
      </body>
    </html>
  );
}
