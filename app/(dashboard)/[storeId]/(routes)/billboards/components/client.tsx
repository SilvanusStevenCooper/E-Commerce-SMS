"use client";

import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { BillboardColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import ApiList from "@/components/ui/api-list";

interface BillboardFormProps {
  data: BillboardColumn[];
}

const BillboardClient: React.FC<BillboardFormProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex flex-col space-y-4 md:flex-row md:items-center items-start justify-between">
        <Heading
          title={`Billboards (${data.length})`}
          description="Manage Your Store Billboards "
        />

        <Button
          onClick={() =>
            router.push(
              `/${params.storeId}/billboards/5f8b7c6d9a3b4e0012345678`
            )
          }
        >
          <Plus className="mr-2 h-4 w-4" />
          Create Billboard
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="label" columns={columns} data={data} />
      <Heading title="API" description="Api Calls for Billboards" />
      <Separator />
      <ApiList entityName="billboards" entityId="billboardId" />
    </>
  );
};

export default BillboardClient;
