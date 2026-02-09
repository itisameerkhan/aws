![demo](https://www.unimedia.tech/wp-content/uploads/2023/11/AWS-Lambda-e1701195645609-1024x359.png)

# AWS LAMBDA

Imagine I own a website called `shopwithameer.com`. Users visit the site, sign up, log in, place orders, submit contact forms, and receive emails. Instead of running a backend server 24/7, I use AWS Lambda. Whenever a user performs an action—like submitting a contact form or logging in—AWS Lambda runs a small piece of backend code, completes the task, and then stops. There is no always-running server, no manual scaling, and no idle cost. The backend logic runs only when required.

### ⚡ What is AWS Lambda?
![demo](../ASSETS/demo33.png)

AWS Lambda is a serverless compute service that allows you to run backend code without creating, managing, or maintaining servers. You only upload your function (code), and AWS automatically executes it when an event occurs, such as an HTTP request, file upload, or database update. Once the execution is complete, Lambda automatically shuts down, making it efficient and cost-effective.

* No server creation or management

* Code runs only when triggered

* Supports Node.js, Python, Java, etc.

* Fully managed by AWS

### ⚡ Why we need Lambda

Traditional backend servers like EC2 must run continuously, even when no users are accessing the application, which leads to unnecessary costs and maintenance. AWS Lambda removes this problem by running code only when it is needed. This makes it ideal for modern applications that require scalability, low cost, and fast development.

* Avoids 24/7 server costs

* No OS or server maintenance

* Faster development and deployment

* Automatic scaling

![demo](../ASSETS/demo34.png)

## ⚡ Benefits of Lambda

###  🔥 1. Single purpose

Each AWS Lambda function is created to do one specific task only, such as user login, sending an email, or processing an order. This keeps the code simple, easy to debug, and easy to update without affecting other parts of the application.

* One function = one responsibility

* Easier to test and maintain

* Failures don’t affect the whole system

### 🔥 2. Right Sized 

AWS Lambda automatically provides the exact amount of memory and CPU needed for your code. You don’t over-allocate resources like in traditional servers, so there is no wastage.

* No guessing server size

* Uses only required resources

* Better performance for small tasks

### 🔥 3. Easy to scale (up AND down)

AWS Lambda automatically handles scaling. If one user visits your site, Lambda runs once. If 1 lakh users visit at the same time, Lambda runs thousands of copies automatically. When traffic reduces, it scales back down without any manual work.

* No load balancer setup

* No manual scaling

* Handles sudden traffic spikes easily

## ⭐ Uses of Lambda

| **Use Case**                          | **What AWS Lambda Does**                                              | **Real-Time Example**                                    |
| ------------------------------------- | --------------------------------------------------------------------- | -------------------------------------------------------- |
| **File processing**                   | Automatically processes files when they are uploaded to **Amazon S3** | Resize images, convert file formats, scan uploaded files |
| **Long-running workflows**            | Runs multi-step workflows that remember progress (up to 1 year)       | Order processing, approval flows, human reviews          |
| **Database operations & integration** | Responds to database changes and automates data tasks                 | Sync data, send alerts when data changes                 |
| **Scheduled & periodic tasks**        | Runs tasks automatically on a schedule using EventBridge              | Daily reports, cleanup jobs, backups                     |
| **Stream processing**                 | Processes real-time streaming data                                    | Log analysis, real-time monitoring, analytics            |
| **Web applications**                  | Builds scalable web backends that auto-adjust to traffic              | Login systems, form submissions, APIs                    |
| **Mobile backends**                   | Provides secure APIs for mobile and web apps                          | Authentication, notifications, user data                 |
| **IoT backends**                      | Handles requests from IoT devices and third-party APIs                | Sensor data processing, device communication             |

## ⭐ How Lambda Works

When you use AWS Lambda, your only responsibility is writing the code. AWS takes care of everything else, such as servers, operating systems, scaling, capacity, and logging. You do not create or manage any machines. Lambda automatically runs your code on a highly available infrastructure whenever it is needed and stops it when the work is finished.

### ⚡ Serverless and event-driven model
AWS Lambda is a serverless and event-driven service. This means your code does not run continuously. Instead, it runs only when an event happens, such as a file upload to S3, an API request, a database update, or a scheduled time. This is different from traditional web applications, where servers run all the time waiting for requests.

### ⚡ Lambda functions (your code)

In AWS Lambda, you write your code as Lambda functions. Each function is a small piece of code that performs a specific task, such as processing a file, handling a request, or sending an email. These functions are the main building blocks of a Lambda-based application.

### ⚡ Security and permissions

AWS Lambda uses permissions and execution roles to control security. An execution role defines what AWS services your Lambda function is allowed to access, such as S3, DynamoDB, or CloudWatch. This ensures your function only has the permissions it needs and nothing more.

### ⚡ Event sources and triggers

Lambda functions are triggered by event sources. When an event occurs, the event data is sent to Lambda in JSON format. Lambda receives this data, processes it using your code, and returns the result.

### ⚡ Runtime and execution environment

AWS Lambda runs your code using language-specific runtimes, such as Node.js or Python. Each function runs inside an execution environment that includes the runtime, your code, libraries (layers), and any extensions. AWS fully manages this environment for you.

---


### ⚡Configure, control, and deploy secure applications

| **Feature**               | **What it Does (Simple)**                        | **Why It’s Useful**                           |
| ------------------------- | ------------------------------------------------ | --------------------------------------------- |
| **Environment variables** | Change app behavior without changing code        | Faster updates, safer configuration           |
| **Versions**              | Run multiple versions of the same function       | Test new features without breaking production |
| **Lambda layers**         | Share common libraries and code across functions | Cleaner code, easier maintenance              |
| **Code signing**          | Ensures only approved code is deployed           | Strong security and compliance                |

### ⚡ Scale and perform reliably

| **Feature**                        | **What it Does (Simple)**                             | **Why It’s Useful**                      |
| ---------------------------------- | ----------------------------------------------------- | ---------------------------------------- |
| **Concurrency & scaling controls** | Control how many functions run at the same time       | Prevent overload during traffic spikes   |
| **Lambda SnapStart**               | Reduces cold start time to sub-second                 | Faster response, better user experience  |
| **Response streaming**             | Sends large responses in parts instead of all at once | Real-time processing, better performance |
| **Container images**               | Package Lambda with complex dependencies              | Works well with large or custom setups   |

## ⭐ Programming models in AWS Lambda

AWS Lambda provides two programming models. The first is standard Lambda functions, which are used for short tasks and can run for up to 15 minutes. The second is Durable Functions, which are designed for long-running and stateful workflows and can run for up to one year. Both models use the same basic Lambda concepts, but Durable Functions add features to pause execution, save state, and resume later.

### ⚡ Standard Lambda functions

Standard Lambda functions are best for short, fast operations such as API requests, file processing, or database updates. Each time an event occurs, Lambda runs your function, completes the task, and stops.

Points

* Maximum execution time: 15 minutes

* Stateless by default

* Ideal for APIs, background jobs, automation

* Runs code only when triggered

### ⚡ Durable Functions (long-running workflows)

Durable Functions are used when tasks take a long time or need to remember progress. They can pause execution, wait for human approval or external events, and then continue exactly where they stopped. Lambda automatically saves and restores the state.

##  ⭐ Standard vs Durable Functions

| Feature                      | Standard Lambda   | Durable Functions    |
| ---------------------------- | ----------------- | -------------------- |
| Max execution time           | 15 minutes        | Up to 1 year         |
| State management             | Stateless         | Stateful             |
| Pause & resume               | ❌ No              | ✅ Yes                |
| Resource usage while waiting | Uses resources    | No resource usage    |
| Failure handling             | Manual            | Automatic retries    |
| Best use case                | APIs, short tasks | Workflows, approvals |

## ⚡ What is an event in AWS Lambda?

An event is anything that causes a Lambda function to run. Lambda does not run all the time. It runs only when an event happens, such as a file upload, an API request, or a message arriving in a queue.

* Event = trigger for Lambda

* Events start function execution

* Event data is sent as JSON

## ⚡ Event Data Format 

When Lambda is triggered, the event information is passed to the function in JSON format. The structure of the JSON depends on the service that generated the event.

* JSON contains event details

* Format varies by AWS service

* Function processes one event at a time


## ⭐ AWS Lambda Trigger Types (Complete Table)

| Category              | Trigger / Service            | When Lambda Runs              | Real-world Example         |
| --------------------- | ---------------------------- | ----------------------------- | -------------------------- |
| **Storage**           | **S3**                       | Object created / deleted      | Resize image after upload  |
| **Streaming**         | **Kinesis Data Streams**     | New record arrives            | Process live logs / clicks |
| **Streaming**         | **DynamoDB Streams**         | Item insert / update / delete | Sync DB changes            |
| **API / HTTP**        | **API Gateway (REST)**       | HTTP request                  | Backend API                |
| **API / HTTP**        | **API Gateway (HTTP API)**   | HTTP request                  | Lightweight API            |
| **API / HTTP**        | **Function URL**             | Direct HTTPS call             | Simple public endpoint     |
| **Messaging**         | **SQS**                      | Message in queue              | Order processing           |
| **Messaging**         | **SNS**                      | Notification published        | Send alerts                |
| **Messaging**         | **Amazon MQ**                | Message arrives               | Legacy messaging           |
| **Events / Schedule** | **EventBridge (Rules)**      | Pattern match event           | React to AWS events        |
| **Events / Schedule** | **EventBridge (Schedule)**   | Cron / fixed time             | Daily job                  |
| **Monitoring**        | **CloudWatch Logs**          | Log data arrives              | Log analysis               |
| **Monitoring**        | **CloudWatch Alarms**        | Alarm state change            | Auto-remediation           |
| **Security**          | **Cognito**                  | User sign-up / login          | User validation            |
| **Security**          | **IAM**                      | Credential events             | Security automation        |
| **DevOps**            | **CodeCommit**               | Code push                     | CI/CD pipeline             |
| **DevOps**            | **CodePipeline**             | Pipeline stage                | Build automation           |
| **DevOps**            | **CodeDeploy**               | Deployment events             | Deployment hooks           |
| **IoT**               | **AWS IoT Core**             | Device message                | Sensor processing          |
| **File Transfer**     | **AWS Transfer Family**      | File upload                   | SFTP workflows             |
| **Email**             | **SES**                      | Email received                | Email parsing              |
| **CDN / Edge**        | **CloudFront (Lambda@Edge)** | Viewer request                | Modify headers             |
| **Containers**        | **ECR**                      | Image push                    | Security scan              |
| **Manual / Testing**  | **Console Test**             | Manual click                  | Debugging                  |
| **Manual / External** | **AWS SDK / CLI**            | API call                      | Programmatic invoke        |


## ⭐ Task

Today, we are going to understand a simple real-time AWS Lambda use case where a user uploads a file to Amazon S3, and that upload automatically triggers an AWS Lambda function. The Lambda function then processes the file and produces an output, such as identifying or setting the correct content type. This shows how AWS Lambda works in an event-driven way without running any server.

### ⚡ Creating a bucket in S3

![demo](../ASSETS/demo35.png)

* It is important to create the S3 bucket in the same region as the Lambda function.

## ⭐ Creating a Lambda function

![demo](../ASSETS/demo36.png)

### Author from scratch (Selected in the image)

* Starts with a simple Hello World function

* You write your own code from beginning

* Best for beginners and real projects

* Full control over logic and configuration

* Most commonly used option

### Use a blueprint

* AWS provides ready-made templates

* Includes sample code + trigger setup

* Useful for quick demos and learning

* Less flexibility than scratch

* Example: API Gateway + Lambda template

### Container image

* Deploy Lambda using a Docker container

* Supports large apps and custom runtimes

* Requires container knowledge (ECR + Docker)

* Used for advanced workloads (ML, heavy libs)

* Not recommended for beginners

### ⚡ Basic Information 

![demo](../ASSETS/demo37.png)

#### Function name 

* This is the unique name of your Lambda function

* Used to identify the function inside AWS

* Must be:

* 1–64 characters

* No spaces

* Allowed: letters, numbers, hyphens, underscores

#### Runtime 

* Supported runtimes include:

* Node.js

* Python

* Java

* Go

* .NET

* Ruby

* PHP

#### Durable execution (new)

* Used for long-running or multi-step workflows

* Automatically saves progress (checkpointing)

* Can resume execution after failure or interruption

* Useful for:

    * Order processing pipelines

    * Step-by-step data processing

    * Costs extra (not free tier)

### ⚡ Default Execution Role

![demo](../ASSETS/demo38.png)

* This screen is used to decide what your AWS Lambda function is allowed to access.

* AWS Lambda itself cannot read S3, write logs, or access other services unless you give permission. These permissions are given using an execution role (IAM role).

* role name - `shopwithameer-s3-role`

* Amazon S3 object read-only permissions

    * Read files from S3 buckets

    * Does NOT allow:

    * Uploading

    * Deleting

    * Modifying files

### ⚡ Code for Nodejs S3 Trigger

```js
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import decodeURIComponent from "decode-uri-component";

console.log("Loading function");

// Create S3 client
const s3 = new S3Client({});

export const handler = async (event, context) => {
  try {
    // Get bucket name
    const bucket = event.Records[0].s3.bucket.name;

    // Get object key (decode + replace + with space)
    const key = decodeURIComponent(
      event.Records[0].s3.object.key.replace(/\+/g, " ")
    );

    // Get object metadata
    const command = new GetObjectCommand({
      Bucket: bucket,
      Key: key,
    });

    const response = await s3.send(command);

    console.log("CONTENT TYPE:", response.ContentType);

    return response.ContentType;

  } catch (error) {
    console.error(error);
    console.error(
      `Error getting object ${key} from bucket ${bucket}. Make sure they exist and are in the same region.`
    );
    throw error;
  }
};
```

![demo](../ASSETS/demo39.png)

* Deploy the function

### ⚡ Add  Trigger

![demo](../ASSETS/demo40.png)

In AWS Lambda, Add trigger means choosing what event will start (invoke) your Lambda function. Lambda does nothing by itself; it runs only when something happens. By clicking Add trigger, you connect your Lambda function to an AWS service (like S3, API Gateway, or EventBridge). Whenever that service generates an event—such as a file upload, an HTTP request, or a scheduled time—AWS automatically executes your Lambda function.

![demo](../ASSETS/demo41.png)

![demo](../ASSETS/demo42.png)

* AWS Lambda function runs automatically whenever something happens in an S3 bucket.

#### 1️⃣ Trigger Type – S3

* S3 is used as the trigger

* Lambda runs asynchronously (background process)

* No server or manual action needed

#### 2️⃣ Bucket

* Bucket name: `s3/shopwithameer`

* Bucket region: ap-south-1

* Bucket and Lambda must be in the same region (important rule)

#### 3️⃣ Event Types (When Lambda Runs)

*Your Lambda function will run when any file is created in the bucket:

* PUT → Normal file upload

* POST → File uploaded via form or API

* COPY → File copied into the bucket

* Multipart upload completed → Large file upload finished

![demo](../ASSETS/demo43.png)

This warning is telling you that your Lambda function should not write files back to the same S3 bucket that triggers it. If Lambda writes output files into the same bucket, S3 will treat that as a new upload and trigger Lambda again. This creates a loop (recursive invocation) where Lambda keeps calling itself repeatedly, which can quickly increase execution count, cost, and resource usage.

![demo](../ASSETS/demo44.png)

**s3 --> shopwithameer --> bucket --> properties**

This screen shows that your S3 bucket is configured to send event notifications when something happens inside it. In your case, the bucket is set up so that whenever a new object (file) is created, S3 automatically sends an event to a Lambda function named `shopwithameer`. This allows the S3 bucket to trigger automation without manual intervention.

![demo](../ASSETS/demo45.png)

**Lambda --> Functions --> shopwithameer --> Configuration --> Permissions --> Return-based policy statements**

This policy statement is a permission rule that allows Amazon S3 to invoke (call) your Lambda function. It clearly says that only the S3 service, only from your AWS account, and only from the specific bucket `shopwithameer` is allowed to trigger this Lambda. This keeps the setup secure and prevents unauthorized services or buckets from invoking your Lambda function.

### ⚡ Upload File in S3

![demo](../ASSETS/demo46.png)

### ⚡ Monitor Cloudwatch Logs

![demo](../ASSETS/demo47.png)

