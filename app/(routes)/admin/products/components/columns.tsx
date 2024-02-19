"use client";

import { ColumnDef } from "@tanstack/react-table";

import { CellAction } from "./cell-action";
import { ImageTypes, Receipt } from "@/types";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export type ProductColumn = {
  id: string;
  name: string;
  title: string;
  price: number;
  quantity: number;
  description: string;
  status: number;
  receipt: Receipt;
  images: ImageTypes[];
};

export const columns: ColumnDef<ProductColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      console.log(row.original.images);

      return (
        <div className="flex items-center">
          <Image
            src={row.original.images[1].imageUrl}
            alt={row.original.name}
            width={100}
            height={100}
          />
          <span>{row.original.name}</span>
        </div>
      );
    },
  },

  {
    accessorKey: "title",
    header: "Title",
  },

  {
    accessorKey: "price",
    header: "Price",
  },

  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  // {
  //   accessorKey: "description",
  //   header: "Description",
  // },
  {
    accessorKey: "receiptName",
    header: "Receipt Name",
    cell: ({ row }) => {
      return <span>{row.original.receipt.receiptName}</span>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return row.original.quantity > 0 ? (
        <Badge variant="success">Stock</Badge>
      ) : (
        <Badge variant="destructive">Out of Stock</Badge>
      );
    },
  },

  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
