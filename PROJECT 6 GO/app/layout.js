import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sixth- Try 6 of Creating UIs",
  description: "Websites Being Created for Improvement",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div>
          {children}
        </div>
        <Footer className = "bg-black text-white" />
      </body>
    </html>
  );
}
