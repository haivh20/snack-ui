import React from "react";
import { SizesClient } from "./components/client";

const CategoriesPage = () => {
  const categories = [
    { id: "cat001", name: "Fruits & Vegetables", status: 1 }, // 1 indicates active category
    { id: "cat002", name: "Dairy & Eggs", status: 0 },
    { id: "cat003", name: "Bakery", status: 1 },
  ];

  return (
    <div className="flex-col ">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SizesClient data={categories} />
      </div>
    </div>
  );
};

export default CategoriesPage;
