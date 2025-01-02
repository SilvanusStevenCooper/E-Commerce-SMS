"use client";

import { ColumnDef } from "@tanstack/react-table";
import CellAction from "./cell-action";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ProductColumn = {
  id: string;
  name: string;
  price: string;
  size: string;
  category: string;
  color: string;
  isFeatured: boolean;
  isArchived: boolean;
  createdAt: string;
};

export const columns: ColumnDef<ProductColumn>[] = [
  {
    accessorKey: "name",
    header: "Product(s)",
  },
  {
    accessorKey: "price",
    header: "Price(s)",
  },
  {
    accessorKey: "size",
    header: "Size(s)",
  },
  {
    accessorKey: "category",
    header: "categories",
  },
  {
    accessorKey: "color",
    header: "Color(s)",
    cell: ({ row }) => (
      <div className="flex items-center gap-x-2">
        {row.original.color}
        <div
          className="h-6 w-6 rounded-full border"
          style={{ backgroundColor: row.original.color }}
        />
      </div>
    ),
  },
  {
    accessorKey: "isFeatured",
    header: "Featured",
  },
  {
    accessorKey: "isArchived",
    header: "Archived",
  },
  {
    accessorKey: "createdAt",
    header: "Date Created",
  },
  {
    header: "Actions",
    id: "action",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
