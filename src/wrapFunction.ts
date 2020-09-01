import { ProxyHandler, APIGatewayProxyResult } from "aws-lambda";

export default function (handler: ProxyHandler): ProxyHandler {
  return async (...args) => {
    try {
      return (await handler(...args)) as APIGatewayProxyResult;
    } catch (e) {
      return {
        statusCode: 500,
        body: e.message,
      };
    }
  };
}
