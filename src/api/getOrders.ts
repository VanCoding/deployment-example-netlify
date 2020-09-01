import prisma from "../prisma";

export default async function () {
  return await prisma.orders.findMany({
    select: {
      id: true,
      time: true,
      items: {
        select: {
          item: true,
          comment: true,
          options: {
            select: {
              group: true,
              value: true,
            },
          },
        },
      },
    },
  });
}

//
