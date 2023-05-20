import { ReactNode } from "react";
import "./globals.css";
import { Bai_Jamjuree, Montserrat, Roboto_Flex } from "next/font/google";

const roboto = Roboto_Flex({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-roboto",
});

const BaiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-jamjuree",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${BaiJamjuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
