"use client";

import { Plus, FileUp } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { columns, PromotionColumn } from "./columns";
import { Heading } from "@/components/admin/heading";
import { DataTable } from "@/components/ui/data-table";

interface PromotionClientProps {
  data: PromotionColumn[];
}

export const PromotionsClient: React.FC<PromotionClientProps> = ({ data }) => {
  const params = useParams();
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Promotions (${data.length})`}
          description="Manage Promotions for your Promotions"
        />
        <div className="flex gap-3">
          <Button
            variant="destructive"
            onClick={() => router.push(`/admin/Promotions/new`)}
          >
            <FileUp className="mr-2 h-4 w-4" /> Export Excel
          </Button>
          {/* <Button onClick={() => router.push(`/admin/Promotions/new`)}>
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
