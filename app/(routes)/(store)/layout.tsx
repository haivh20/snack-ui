import React from "react";
import Footer from "@/components/store/footer/footer";
import Navbar from "@/components/store/navbar/navbar";

const StoreLayoutPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default StoreLayoutPage;
