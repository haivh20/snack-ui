"use client";

import { ColumnDef } from "@tanstack/react-table";

import { CellAction } from "./cell-action";
import { DiaChi } from "@/types";

export type CustomerColumn = {
  idkh: string;
  tenKhachHang: string;
  gioiTinh: string;
  trangThai: number;
  dob: Date;
  age: number;
  diaChis: DiaChi[];
};

export const columns: ColumnDef<CustomerColumn>[] = [
  {
    accessorKey: "tenKhachHang",
    header: "tenKhachHang",
  },

  {
    accessorKey: "gioiTinh",
    header: "gioiTinh",
  },

  {
    accessorKey: "dob",
    header: "dob",
  },

  {
    accessorKey: "age",
    header: "age Chi",
  },
  {
    accessorKey: "diaChi",
    header: "Dia Chi",
    cell: ({ row }) => {
      return <div>{row.original.diaChis[0].diaChi}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
