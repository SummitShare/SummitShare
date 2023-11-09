import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import LandingNavBar from "./Landing/components/LandingNavBar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "SummitShare",
  // description: 'Generated by create next app',
};

export default function Landing({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`relative bg-white mx-[10px] lg:mx-[30px] mt-20 md:mx-[20px] ${poppins.className}`}
      >
        <LandingNavBar />

        {children}
      </body>
    </html>
  );
}