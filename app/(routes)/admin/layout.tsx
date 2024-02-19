import React from "react";
import Navbar from "@/components/admin/navbar/navbar";
import { ThemeProvider } from "@/providers/theme-provider";

const StoreLayoutPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Navbar />
        {children}
      </ThemeProvider>
    </>
  );
};

export default StoreLayoutPage;
