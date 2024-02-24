import React from "react";
import { CustomersClient } from "./components/client";
import getCustomer from "@/actions/get-customers";

const Customers = async () => {
  const customers = await getCustomer();
  console.log(customers);

  return (
    <div className="flex-col ">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CustomersClient data={customers} />
      </div>
    </div>
  );
};

export default Customers;
