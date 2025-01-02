import prismadb from "@/lib/prismadb";

import React from "react";

const getStockCount = async (storeId: string) => {
  const stockCount = await prismadb.product.count({
    where: {
      storeId,
      isArchived: false,
    },
  });

  return stockCount;
};

export default getStockCount;
