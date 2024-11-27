import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Inknut_Antiqua, Nunito, Junge, Julius_Sans_One, Righteous, Darker_Grotesque, Sriracha} from "next/font/google";
import "./globals.css";
import Script from  "next/script"

const righteous = Righteous({
  subsets: ['latin'],
  variable: '--font-righteous',
  weight: '400'
});

const darker_grotesque = Darker_Grotesque({
  subsets: ['latin'],
  variable: '--font-darker-grotesque',
});

export const metadata: Metadata = {
  title: "WEHack",
  description: "WEHack 24-25 Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* google analytics tag */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-R5CQZPXHFV"></Script>
        <Script id="google analytics tag">
          {
            `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-R5CQZPXHFV');

            `
          }
        </Script>

      </head>
      <body className={`${righteous.variable} ${darker_grotesque.variable}`}>{children}</body>
    </html>
  );
}
