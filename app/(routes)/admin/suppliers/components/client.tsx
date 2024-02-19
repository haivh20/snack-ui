"use client";

import { Plus, FileUp } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { columns, SupplierColumn } from "./columns";
import { Heading } from "@/components/admin/heading";
import { DataTable } from "@/components/ui/data-table";

interface SupplierClientProps {
  data: SupplierColumn[];
}

export const SuppliersClient: React.FC<SupplierClientProps> = ({ data }) => {
  const params = useParams();
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Suppliers (${data.length})`}
          description="Manage suppliers for your suppliers"
        />
        <div className="flex gap-3">
          <Button
            variant="destructive"
            onClick={() => router.push(`/admin/suppliers/new`)}
          >
            <FileUp className="mr-2 h-4 w-4" /> Export Excel
          </Button>
          <Button onClick={() => router.push(`/admin/suppliers/new`)}>
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Button>
        </div>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
      <Separator />
    </>
  );
};
