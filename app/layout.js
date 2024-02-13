import Navigation from "@/components/Navigation";
import "./globals.css";
import { Inter, Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="p-5">
        <Navigation />
        {children}
      </body>
    </html>
  );
}