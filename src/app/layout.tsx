import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Nyano Nepal",
  description:
    "Join Nyano Nepal in transforming lives in Nepal through donations of surplus clothing and essentials. Help provide warmth and support to underserved communities. Donate today and make a meaningful impact.",
  keywords: [
    "Nepal",
    "Donations",
    "Surplus Clothing",
    "Community Support",
    "Charity",
  ],
  openGraph: {
    type: "website",
    url: "https://nyano-nepal.vercel.app/",
    title: "Nyano Nepal",
    description:
      "Join Nyano Nepal in transforming lives in Nepal through donations of surplus clothing and essentials. Help provide warmth and support to underserved communities. Donate today and make a meaningful impact.",
    siteName: "Nyano Nepal",
    images: [
      {
        url: "/images/sherpa-kids.jpg",
        width: 800,
        height: 600,
        alt: "Children in Nepal receiving donations",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
