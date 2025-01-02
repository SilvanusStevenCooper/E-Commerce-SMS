"use client";

import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { ProductColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import ApiList from "@/components/ui/api-list";

interface ProductFormProps {
  data: ProductColumn[];
}

const ProductClient: React.FC<ProductFormProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <div className="flex-1 space-y-4 p-8 pt-6 overflow-hidden">
      <div className="flex flex-col items-start gap-4 md:flex-row md:items-center justify-between">
        <Heading
          title={`Products (${data.length})`}
          description="Manage Your Store Products "
        />

        <Button
          onClick={() =>
            router.push(`/${params.storeId}/products/5f8b7c6d9a3b4e0012345678`)
          }
        >
          <Plus className="mr-2 h-4 w-4" />
          Create Product
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
      <Heading title="API" description="Api Calls for Products" />
      <Separator />
      <ApiList entityName="products" entityId="productId" />
    </div>
  );
};

export default ProductClient;
