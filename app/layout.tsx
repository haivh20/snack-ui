import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/providers/toast-provider";
import LoginModal from "@/components/store/modals/LoginModal";
import RegisterModal from "@/components/store/modals/RegisterModal";
import PreviewModal from "@/components/store/preview/preview-product";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LoginModal />
        <PreviewModal />
        <RegisterModal />
        <ToastProvider />
        {children}
      </body>
    </html>
  );
}
