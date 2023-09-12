import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import GithubCorner from "@/components/github-corner/GithubCorner";
import { Suspense } from "react";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "NubianVR Simulation",
  description: "Simulation Task for NubianVR",
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <GithubCorner />
        {children}
        {modal}
        <Footer />
      </body>
    </html>
  );
}
