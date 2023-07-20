import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";

const fira_sans = Fira_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "just_icons - Icon Library",
  description: "just_icons - Icon Library",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fira_sans.className} bg-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
