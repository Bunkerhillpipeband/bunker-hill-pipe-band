import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bunker Hill Pipe Band",
  description: "Official website of the Bunker Hill Pipe Band of Charlestown, Massachusetts.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
