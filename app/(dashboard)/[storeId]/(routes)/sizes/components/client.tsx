"use client";

import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { SizeColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import ApiList from "@/components/ui/api-list";

interface SizesFormProps {
  data: SizeColumn[];
}

const SizesClient: React.FC<SizesFormProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex flex-col items-start gap-4 md:flex-row md:items-center justify-between">
        <Heading
          title={`Sizes (${data.length})`}
          description="Manage Sizes for Your Store "
        />

        <Button
          onClick={() =>
            router.push(`/${params.storeId}/sizes/5f8b7c6d9a3b4e0012345678`)
          }
        >
          <Plus className="mr-2 h-4 w-4" />
          Create Size
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
      <Heading title="API" description="Api Calls for Size" />
      <Separator />
      <ApiList entityName="Sizes" entityId="SizeId" />
    </>
  );
};

export default SizesClient;
