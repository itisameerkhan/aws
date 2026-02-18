## ⚡ AWS Lambda Trigger Function

```js
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3 = new S3Client({ region: "ap-south-1" });

export const handler = async (event) => {

  for (const record of event.Records) {

    if (record.eventName === "INSERT") {

      const newImage = record.dynamodb.NewImage;

      const orderId = newImage.order_id.S;
      const productName = newImage.product_name.S;
      const price = newImage.price.N;
      const address = newImage.address.S;
      const deliveryDate = newImage.delivery_date.S;
      const paid = newImage.paid.BOOL;

      const invoice = `
INVOICE
------------------------
Order ID: ${orderId}
Product: ${productName}
Price: ₹${price}
Address: ${address}
Delivery Date: ${deliveryDate}
Paid: ${paid}
Generated At: ${new Date().toISOString()}
`;

      const params = {
        Bucket: "YOUR_REAL_BUCKET_NAME",
        Key: `invoice-${orderId}.txt`,
        Body: invoice
      };

      await s3.send(new PutObjectCommand(params));
    }
  }

  return { statusCode: 200 };
};
```