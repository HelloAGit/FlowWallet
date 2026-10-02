import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FlowWallet — Consumer finance on Monad",
  description: "A consumer-first programmable finance prototype powered by Monad."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
