import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Supriya Mohapatra | AI & Machine Learning Engineer",
  description:
    "Portfolio of Supriya Mohapatra, AI & ML Engineer and B.Tech CSE student at GIET University Gunupur. Specializing in Deep Learning, Computer Vision, Autonomous Agents, and High-Performance Neural Architectures.",
  keywords: [
    "Supriya Mohapatra",
    "AI Engineer",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "GIET University Gunupur",
    "PyTorch",
    "Transformers",
    "Portfolio",
  ],
  authors: [{ name: "Supriya Mohapatra" }],
  openGraph: {
    title: "Supriya Mohapatra | AI & Machine Learning Engineer",
    description:
      "Explore state-of-the-art AI/ML architectures, real-time edge vision systems, autonomous LLM agents, and interactive research prototypes.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supriya Mohapatra | AI & Machine Learning Engineer",
    description:
      "B.Tech CSE (AI & ML) at GIET University Gunupur. Bridging theoretical AI research with production-grade engineering.",
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
      className={`${syne.variable} ${jakarta.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
