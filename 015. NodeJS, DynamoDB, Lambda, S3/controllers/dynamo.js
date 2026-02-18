import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { docClient } from "../config/dynamo.js";

export const addData = async (req, res) => {
  try {
    const { order_id, product_name, price, paid, address, delivery_date } =
      req.body;

    const params = {
      TableName: "amazon-orders",
      Item: {
        order_id,
        product_name,
        price,
        paid,
        address,
        delivery_date,
      },
    };

    const response = await docClient.send(new PutCommand(params));

    res.json({
      success: true,
      message: "order place successfully",
    });
  } catch (e) {
    next(e);
  }
};
