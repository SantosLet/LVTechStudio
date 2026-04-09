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
  title: "LV Tech Studio",
  description: "Portifólio Profissional da Letícia Gabrielle Videira dos Santos",
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
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/scrollflow@1.3.0/dist/style.min.css"></link>
      </head>
      
      <body className={`${dmSans.variable} ${gowun.variable} ${spaceGrotesk.variable}`}>
        <Header/>

        <main>{children}</main>

        <Footer/>

        <script src="https://cdn.jsdelivr.net/npm/scrollflow@1.3.0/dist/scrollflow.umd.min.js"></script>
      </body>
    </html>
  );
}
