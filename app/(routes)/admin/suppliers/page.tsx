import React from "react";
import { SuppliersClient } from "./components/client";

const Supplier = () => {
  const suppliers = [
    {
      id: "sup001",
      code: "ORG-VEG-001",
      name: "Green Farms Co.",
      phone: "+1234567890",
      address: "123 Green Lane, Farmville, FV123",
      email: "contact@greenfarms.co",
    },
    {
      id: "sup002",
      code: "FRESH-MILK-002",
      name: "Dairy Delight",
      phone: "+0987654321",
      address: "456 Milky Way, Dairyland, DL456",
      email: "info@dairydelight.com",
    },
    {
      id: "sup003",
      code: "BAKERY-GOODS-003",
      name: "Bread & Butter",
      phone: "+1122334455",
      address: "789 Baker St, Bakersville, BK789",
      email: "sales@breadandbutter.com",
    },
  ];

  return (
    <div className="flex-col ">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SuppliersClient data={suppliers} />
      </div>
    </div>
  );
};

export default Supplier;
