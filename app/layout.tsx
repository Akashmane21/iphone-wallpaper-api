import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "iPhone Wallpaper API",
  description: "Dynamic wallpaper image generator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}