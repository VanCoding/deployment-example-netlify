import { v4 as uuid } from "uuid";
import * as z from "zod";

import prisma from "../prisma";

import { Gql } from "../graphql-zeus";
global.fetch = require("node-fetch");

const Order = z.object({
  items: z.array(
    z.object({
      item: z.string(),
      comment: z.string(),
      options: z.array(
        z.object({
          group: z.string(),
          value: z.array(z.string()),
        })
      ),
    })
  ),
});

export default async function (body: string) {
  const order = Order.parse(JSON.parse(body));
  const id = uuid();

  var studioItems = (
    await Gql.query({
      allItems: [
        { where: { _id_in: order.items.map((item) => item.item) } },
        {
          _id: true,
          optionGroups: {
            _key: true,
            multiSelect: true,
            options: {
              _key: true,
              price: true,
            },
          },
        },
      ],
    })
  ).allItems;

  for (const item of order.items) {
    const studioItem = studioItems.find(
      (studioItem) => studioItem._id == item.item
    );
    if (!studioItem) throw new Error(`item ${item.item} does not exist`);
    for (const optionGroup of item.options) {
      const studioGroup = studioItem.optionGroups.find(
        (studioGroup) => studioGroup._key == optionGroup.group
      );
      if (!studioGroup)
        throw new Error(`option group ${optionGroup.group} does not exist`);
      for (const option of optionGroup.value) {
        const studioOption = studioGroup.options.find(
          (studioOption) => studioOption._key == option
        );
        if (!studioOption) {
          throw new Error(`option ${option} does not exist`);
        }
      }
    }
  }

  await prisma.orders.create({
    data: {
      id,
      time: new Date().toISOString(),
      items: {
        create: order.items.map((item) => ({
          id: uuid(),
          item: item.item,
          comment: item.comment,
          options: {
            create: item.options.map((option) => ({
              id: uuid(),
              group: option.group,
              value: { set: option.value },
            })),
          },
        })),
      },
    },
  });
  return id;
}
