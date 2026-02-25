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
  metadataBase: new URL("https://sanwebstudio.com"),

  title: {
    default: "San Web Studio | Freelance Web Designer in Bangalore",
    template: "%s | San Web Studio",
  },

  description:
    "Freelance Web Designer in Bangalore specializing in AI automation, modern responsive websites, and intelligent digital solutions for businesses.",

  keywords: [
    "Freelance Web Designer in Bangalore",
    "Website Developer Bangalore",
    "AI Automation Services Bangalore",
    "Modern Business Websites",
    "San Web Studio"
  ],

  authors: [{ name: "San Web Studio" }],
  creator: "San Web Studio",

  icons: {
    icon: "/favicon.ico",
  },

  alternates: {
    canonical: "https://sanwebstudio.com",
  },

  openGraph: {
    title: "San Web Studio | Freelance Web Designer in Bangalore",
    description:
      "Modern websites powered by smart automation. Helping businesses grow with clean design and AI workflows.",
    url: "https://sanwebstudio.com",
    siteName: "San Web Studio",
    locale: "en_IN",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "San Web Studio",
              url: "https://sanwebstudio.com",
              logo: "https://sanwebstudio.com/sws-logo.png",
            }),
          }}
        />
      </body>
    </html>
  );
}