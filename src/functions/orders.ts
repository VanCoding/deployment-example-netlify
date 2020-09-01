import wrap from "../wrapFunction";
import createOrder from "../api/createOrder";
import getOrders from "../api/getOrders";

export const handler = wrap(async (event) => {
  if (event.httpMethod == "POST") {
    return {
      statusCode: 200,
      headers: { "Content-Type": "text/plain" },
      body: await createOrder(event.body),
    };
  } else {
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/javascript" },
      body: JSON.stringify(await getOrders()),
    };
  }
});
