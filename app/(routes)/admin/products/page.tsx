import React from "react";
import { ProductsClient } from "./components/client";

const Product = () => {
  const products = [
    {
      id: "prod001",
      name: "Organic Apple",
      title: "Fresh Organic Apple",
      price: 2.99,
      quantity: 150,
      status: 1, // Assuming 0 is out of stock, 1 is in stock
      description: "Delicious and crunchy organic apples from local farms.",
      receipt: {
        id: "rec001",
        receiptCode: "REC-APPLE-001",
        receiptName: "Apple Purchase Invoice",
        importDate: new Date("2024-02-15"),
        expirationDate: new Date("2024-03-15"),
        productionDate: new Date("2024-01-10"),
        quantity: 500,
        total: 1495,
        supplier: {
          id: "supp001",
          code: "SUPP-ORG-APPLE",
          name: "Green Orchard",
          phone: "+123456789",
          address: "123 Green Valley, Orchard City",
          email: "contact@greenorchard.com",
        },
      },
      images: [
        {
          id: "img001",
          imageUrl:
            "https://web.hn.ss.bfcplatform.vn/mkmart/product/20233/4d10ffe865114126b1a40ad8ca0b0471-m.jpg",
        },
        {
          id: "img002",
          imageUrl:
            "https://web.hn.ss.bfcplatform.vn/mkmart/product/20233/4d10ffe865114126b1a40ad8ca0b0471-m.jpg",
        },
      ],
    },
    {
      id: "prod002",
      name: "Almond Milk",
      title: "Organic Almond Milk",
      price: 5.99,
      quantity: 80,
      status: 1,
      description: "Smooth and creamy organic almond milk, perfect for vegans.",
      receipt: {
        id: "rec002",
        receiptCode: "REC-ALM-MILK-002",
        receiptName: "Almond Milk Purchase Invoice",
        importDate: new Date("2024-02-10"),
        expirationDate: new Date("2024-06-10"),
        productionDate: new Date("2024-01-20"),
        quantity: 200,
        total: 1198,
        supplier: {
          id: "supp002",
          code: "SUPP-ALM-MILK",
          name: "Nutty Almond Co.",
          phone: "+987654321",
          address: "456 Nutty Way, Almond Town",
          email: "info@nuttyalmondco.com",
        },
      },
      images: [
        {
          id: "img003",
          imageUrl:
            "https://web.hn.ss.bfcplatform.vn/mkmart/product/20233/4d10ffe865114126b1a40ad8ca0b0471-m.jpg",
        },
        {
          id: "img004",
          imageUrl:
            "https://web.hn.ss.bfcplatform.vn/mkmart/product/20233/4d10ffe865114126b1a40ad8ca0b0471-m.jpg",
        },
      ],
    },
    {
      id: "prod003",
      name: "Whole Wheat Bread",
      title: "Organic Whole Wheat Bread",
      price: 3.49,
      quantity: 0, // Out of stock
      status: 0,
      description:
        "Soft and nutritious whole wheat bread made with organic flour.",
      receipt: {
        id: "rec003",
        receiptCode: "REC-WHEAT-BREAD-003",
        receiptName: "Wheat Bread Purchase Invoice",
        importDate: new Date("2024-02-08"),
        expirationDate: new Date("2024-03-08"),
        productionDate: new Date("2024-02-01"),
        quantity: 300,
        total: 1047,
        supplier: {
          id: "supp003",
          code: "SUPP-WHEAT-BREAD",
          name: "Healthy Grains Bakery",
          phone: "+123987456",
          address: "789 Bread Street, Bakery City",
          email: "sales@healthygrainsbakery.com",
        },
      },
      images: [
        {
          id: "img005",
          imageUrl:
            "https://web.hn.ss.bfcplatform.vn/mkmart/product/20233/4d10ffe865114126b1a40ad8ca0b0471-m.jpg",
        },
        {
          id: "img006",
          imageUrl:
            "https://web.hn.ss.bfcplatform.vn/mkmart/product/20233/4d10ffe865114126b1a40ad8ca0b0471-m.jpg",
        },
      ],
    },
  ];

  return (
    <div className="flex-col ">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductsClient data={products} />
      </div>
    </div>
  );
};

export default Product;
