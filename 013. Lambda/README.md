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

### 1. 🔥 Single purpose

Each AWS Lambda function is created to do one specific task only, such as user login, sending an email, or processing an order. This keeps the code simple, easy to debug, and easy to update without affecting other parts of the application.

* One function = one responsibility

* Easier to test and maintain

* Failures don’t affect the whole system

### 🔥 2. Right Sized 

AWS Lambda automatically provides the exact amount of memory and CPU needed for your code. You don’t over-allocate resources like in traditional servers, so there is no wastage.

* No guessing server size

* Uses only required resources

* Better performance for small tasks

### 🔥 3. 3️⃣ Easy to scale (up AND down)

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

## ⭐ Task

Today, we are going to understand a simple real-time AWS Lambda use case where a user uploads a file to Amazon S3, and that upload automatically triggers an AWS Lambda function. The Lambda function then processes the file and produces an output, such as identifying or setting the correct content type. This shows how AWS Lambda works in an event-driven way without running any server.

## ⚡ Creating a bucket in S3

![demo](../ASSETS/demo35.png)

* It is important to create the S3 bucket in the same region as the Lambda function.