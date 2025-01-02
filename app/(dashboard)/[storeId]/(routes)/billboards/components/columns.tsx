"use client";

import { ColumnDef } from "@tanstack/react-table";
import CellAction from "./cell-action";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type BillboardColumn = {
  id: string;
  label: string;
  createdAt: string;
};

export const columns: ColumnDef<BillboardColumn>[] = [
  {
    accessorKey: "label",
    header: "Billboard(s)",
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
