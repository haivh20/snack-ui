"use client";

import { FileUp, Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Separator } from "@/components/ui/separator";

import { ProductColumn, columns } from "./columns";
import { Heading } from "@/components/admin/heading";

interface ProductsClientProps {
  data: ProductColumn[];
}

export const ProductsClient: React.FC<ProductsClientProps> = ({ data }) => {
  const params = useParams();
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Products (${data.length})`}
          description="Manage products for your store"
        />
        <div className="flex gap-4">
          <Button
            variant="destructive"
            onClick={() => router.push(`/admin/products/new`)}
          >
            <FileUp className="mr-2 h-4 w-4" /> Export Excel
          </Button>
          <Button onClick={() => router.push(`/admin/products/new`)}>
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
