import {
  PutCommand,
  ScanCommand,
  UpdateCommand,
  DeleteCommand,
} from "@aws-sdk/lib-dynamodb";
import { docClient } from "../config/dynamo.js";

export const addData = async (req, res) => {
  try {
    const { customer_id, name, age, email, phone } = req.body;

    const params = {
      TableName: "demo-table",
      Item: {
        customer_id,
        name,
        age,
        email,
        phone,
      },
    };

    const response = await docClient.send(new PutCommand(params));

    res.json({
      success: true,
      message: "data inserted successfully",
    });
  } catch (e) {
    res.json({
      success: false,
      message: "some error",
      error: e.message,
    });

    console.error(e);
  }
};

export const getData = async (req, res) => {
  try {
    const params = {
      TableName: "demo-table",
    };

    const data = await docClient.send(new ScanCommand(params));
    res.json({
      success: true,
      message: "message fetched successfull",
      data: data,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: "error found",
      error: e.message,
    });
  }
};

export const updateData = async (req, res) => {
  try {
    const { customer_id, updatedName } = req.body;
    const params = {
      TableName: "demo-table",
      Key: { customer_id },
      UpdateExpression: "set #name = :newName",
      ExpressionAttributeNames: {
        "#name": "name",
      },
      ExpressionAttributeValues: {
        ":newName": updatedName,
      },
      ReturnValues: "ALL_NEW",
    };

    const data = await docClient.send(new UpdateCommand(params));
    res.json({
      success: true,
      message: "data updated successfully",
      data: data,
    });
  } catch (e) {
    res.json({
      success: false,
      message: "update unsuccessfull",
      error: e.message,
    });
  }
};

export const deleteData = async (req, res) => {
  try {
    const { customer_id } = req.body;
    const params = {
      TableName: "demo-table",
      Key: {
        customer_id,
      },
    };

    await docClient.send(new DeleteCommand(params));

    res.json({
      success: true,
      message: "data deletion successfull",
    });
    
  } catch (e) {
    res.json({
      success: false,
      message: "data deletion unsuccessful",
      error: e.message,
    });
  }
};
