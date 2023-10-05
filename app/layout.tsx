import "./globals.css";

import { Roboto_Mono } from "next/font/google";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Harriet Forster",
  description: "Portfolio site for artist Harriet Forster",
};

const font = Roboto_Mono({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className="bg-stone-300">{children}</body>
    </html>
  );
}
