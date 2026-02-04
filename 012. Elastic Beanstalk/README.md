# Elastic Beanstalk

![demo](https://devio2023-media.developers.io/wp-content/uploads/2019/05/aws-elastic-beanstalk.png)

AWS Elastic Beanstalk is a Platform as a Service (PaaS) from AWS that lets you deploy, run, and scale applications without worrying about infrastructure.

## You focus on:

* Writing code

* Choosing a runtime (Node.js, Java, Python, etc.)

## AWS handles:

* Servers (EC2)

* Load balancing

* Auto scaling

* Monitoring

* OS & runtime setup

Supported technologies

## Elastic Beanstalk supports common app stacks:

* Node.js

* Java (Spring Boot, Tomcat)

* Python (Flask, Django)

* PHP

* Ruby

* .NET

* Go

* Docker

--- 

# 💗 Core Components 

* Application 

* Application Version 

* Environment 

* Platform 

# 📦 Application

### 🌍 Environments
*   Infrastructure (EC2 instances, load balancers, auto-scaling groups, etc.)

*   Runs a single application version at a time
*   An application can have many environments (like dev and test)

### 📦 Application Versions
*   Application code

*   Stored in S3
*   An application can have many application versions (supporting rollback, etc.)

### ⚙️ Saved Configurations
*   Defines how an environment and its resources behave

*   Can be used to launch new environments
*   An application can have many saved configurations

# Hands on 

![demo](../ASSETS/demo13.png)

| Feature               | Web Server | Worker |
| --------------------- | ---------- | ------ |
| Handles HTTP requests | ✅ Yes      | ❌ No   |
| Load Balancer         | ✅ Yes      | ❌ No   |
| Uses SQS              | ❌ No       | ✅ Yes  |
| Background jobs       | ❌ No       | ✅ Yes  |
| APIs & websites       | ✅ Yes      | ❌ No   |

## Web Server Environment

* Used to run websites, web applications, and APIs

* Handles HTTP/HTTPS requests directly from users

* Automatically creates EC2 instances, Load Balancer, and Auto Scaling

* Suitable for Node.js, Java, Python, PHP APIs

* Best for real-time user responses

### Example:

A user opens a website or calls an API and gets an immediate response.

## Worker Environment

* Used for background and long-running tasks

* Does not handle HTTP requests

* Uses Amazon SQS to receive jobs

* EC2 instances pick tasks from the queue and process them

* Best for email sending, image processing, report generation

### Example:
After a user places an order, a background job sends a confirmation email.

--- 

![demo](../ASSETS/demo14.png)

![demo](../ASSETS/demo15.png)

![demo](../ASSETS/demo16.png)

In AWS Elastic Beanstalk, the platform defines the technology stack used to run your application. It tells AWS which programming language, operating system, and runtime version should be installed on the EC2 instances. Based on the selected platform, Elastic Beanstalk automatically provisions servers, installs the required runtime, and configures everything needed to run your application.

![demo](../ASSETS/demo17.png)

In AWS Elastic Beanstalk, Application code decides which code will be deployed and run inside the environment. When you create an environment, you can choose to run a sample app, use an existing uploaded version, or upload your own application code.

### Sample application

* Default demo app provided by AWS

* Used only for testing and learning

* No code upload required

### Existing version

* Uses a previously uploaded application version

* Helpful for redeploying or rolling back

* Ensures the same code runs again

### Upload your code

* Deploys your own application

* Upload code as a ZIP file or from Amazon S3

* Used for real and production applications

![demo](../ASSETS/demo18.png)

In AWS Elastic Beanstalk, Presets are ready-made configuration templates that quickly set up your environment based on common use cases. Instead of configuring everything manually, you choose a preset and Elastic Beanstalk automatically applies recommended settings for instances, scaling, and availability.

## Single instance (free tier eligible)

* Runs your app on one EC2 instance

* No load balancer

* Lowest cost option

* Best for learning, testing, and small apps

* If the instance fails, the app goes down

## Single instance (using Spot instance)

* Runs on one Spot EC2 instance

* Cheaper than normal EC2

* Instance can be stopped by AWS anytime

* Suitable for non-critical apps

## High availability

* Runs on multiple EC2 instances

* Includes a Load Balancer

* Supports Auto Scaling

* App stays online even if one instance fails

* Best for production applications

## High availability (using Spot and On-Demand)

* Mix of On-Demand + Spot instances

* Lower cost with high availability

* On-Demand ensures stability

* Spot reduces cost when available

* Common choice for cost-optimized production

## Custom configuration

* Full control over instances, scaling, networking

* No preset values applied

* Best for advanced or specific requirements

## Simple way to remember

* Single instance → cheap & simple

* High availability → safe & scalable

* Spot instances → cheaper but less reliable

* Custom → full control