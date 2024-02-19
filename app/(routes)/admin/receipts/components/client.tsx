"use client";

import { Plus, FileUp } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { columns, ReceiptColumn } from "./columns";
import { Heading } from "@/components/admin/heading";
import { DataTable } from "@/components/ui/data-table";

interface ReceiptClientProps {
  data: ReceiptColumn[];
}

export const ReceiptsClient: React.FC<ReceiptClientProps> = ({ data }) => {
  const params = useParams();
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Receipts (${data.length})`}
          description="Manage Receipts for your receipts"
        />
        <div className="flex gap-3">
          <Button
            variant="destructive"
            onClick={() => router.push(`/admin/receipts/new`)}
          >
            <FileUp className="mr-2 h-4 w-4" /> Export Excel
          </Button>
          {/* <Button onClick={() => router.push(`/admin/Receipts/new`)}>
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Button> */}
        </div>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
      <Separator />
    </>
  );
};
