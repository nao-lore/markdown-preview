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
  verification: {
    google: "uRTAz7j8N8jDW5BzJaGn-wzrFY5C7KNStVLMKlGzo_4",
  },
  title: "Markdown Preview - Live Markdown Editor & Viewer | markdown-preview",
  description:
    "Free online Markdown preview tool. Write Markdown and see rendered HTML in real time. Supports headings, bold, italic, links, images, code blocks, tables, and more.",
  keywords: [
    "markdown preview",
    "markdown editor online",
    "markdown viewer",
    "live markdown",
    "markdown renderer",
    "markdown to html",
  ],
  authors: [{ name: "markdown-preview" }],
  openGraph: {
    title: "Markdown Preview - Live Markdown Editor & Viewer",
    description:
      "Free online Markdown preview tool. Write Markdown and see rendered HTML in real time.",
    url: "https://markdown-preview-one.vercel.app",
    siteName: "markdown-preview",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Markdown Preview - Live Markdown Editor & Viewer",
    description:
      "Free online Markdown preview tool. Write Markdown and see rendered HTML in real time.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://markdown-preview-one.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Markdown Preview",
              description:
                "Free online Markdown preview tool with live rendering. Write Markdown and see HTML output in real time.",
              url: "https://markdown-preview-one.vercel.app",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "Any",
              browserRequirements: "Requires JavaScript",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              featureList: [
                "Real-time Markdown preview",
                "Split view editor",
                "Custom Markdown parser",
                "Copy HTML output",
                "Copy Markdown source",
                "Word and character count",
                "Support for tables, code blocks, and more",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
