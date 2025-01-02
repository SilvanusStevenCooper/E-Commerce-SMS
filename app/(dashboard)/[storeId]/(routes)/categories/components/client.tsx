"use client";

import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { CategoryColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import ApiList from "@/components/ui/api-list";

interface CategoryFormProps {
  data: CategoryColumn[];
}

const CategoryClient: React.FC<CategoryFormProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex flex-col items-start space-y-4 md:space-y-0 md:flex-row md:items-center justify-between">
        <Heading
          title={`Categories (${data.length})`}
          description="Manage Your Store Categories "
        />

        <Button
          onClick={() =>
            router.push(
              `/${params.storeId}/categories/5f8b7c6d9a3b4e0012345678`
            )
          }
        >
          <Plus className="mr-2 h-4 w-4" />
          Create Category
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
      <Heading title="API" description="Api Calls for Categories" />
      <Separator />
      <ApiList entityName="categories" entityId="categoryId" />
    </>
  );
};

export default CategoryClient;
