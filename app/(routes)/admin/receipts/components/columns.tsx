"use client";

import { ColumnDef } from "@tanstack/react-table";

import { CellAction } from "./cell-action";
import { Badge } from "@/components/ui/badge";

export type ReceiptColumn = {
  id: string;
  name: string;
  status: number;
};

export const columns: ColumnDef<ReceiptColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },

  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return row.original.status === 1 ? (
        <Badge variant="success">Active</Badge>
      ) : (
        <Badge variant="destructive">Inactive</Badge>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
