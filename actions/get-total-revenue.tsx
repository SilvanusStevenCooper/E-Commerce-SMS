import prismadb from "@/lib/prismadb";

const getTotalRevenue = async (storeId: string) => {
  const paidOrders = await prismadb.order.findMany({
    where: {
      storeId,
      isPaid: true,
    },
    include: {
      orderedItems: {
        include: {
          product: true,
        },
      },
    },
  });

  const totalRevenue = paidOrders.reduce((total, order) => {
    const orderTotal = order.orderedItems.reduce((orderSum, item) => {
      return orderSum + Number(item.product.price);
    }, 0);

    return total + orderTotal;
  }, 0);

  return totalRevenue;
};

export default getTotalRevenue;
