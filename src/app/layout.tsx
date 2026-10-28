import type { Metadata } from "next";
import "@/styles/globals.css";
import { DM_Sans, Gowun_Batang, Space_Grotesk } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmsans",
});

const gowun = Gowun_Batang({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-gowun",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-spacegrot",
});

export const metadata: Metadata = {
  title: "Letícia Santos | Full-stack Developer",
  description: "Desenvolvedora Full-stack especializada em aplicações web, interfaces modernas, APIs e soluções com Vue.js, TypeScript e Node.js.",
  icons: {
  icon: "/icons/lvtech_logo_orange.svg",
}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>

      <body className={`${dmSans.variable} ${gowun.variable} ${spaceGrotesk.variable}`}>
        <Header/>

        <main>{children}</main>

        <Footer/>
      </body>
    </html>
  );
}
