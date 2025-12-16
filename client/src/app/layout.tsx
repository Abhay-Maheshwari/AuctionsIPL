import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SocketProvider } from "@/contexts/SocketContext";
import { GameProvider } from "@/contexts/GameContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IPL Fantasy Auction | Build Your Dream Team",
  description: "Experience the thrill of IPL auctions with friends. Create or join auction rooms, bid on players in real-time, and build the ultimate fantasy cricket team.",
  keywords: ["IPL", "fantasy", "auction", "cricket", "game", "multiplayer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased bg-slate-950 text-white min-h-screen`}
        suppressHydrationWarning
      >
        <SocketProvider>
          <GameProvider>
            {children}
          </GameProvider>
        </SocketProvider>
      </body>
    </html>
  );
}
