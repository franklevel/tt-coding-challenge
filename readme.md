Code Challenge for Senior Backend Engineer (Node.js / TypeScript / Java)

Evaluation of Job Description

This is a valid IT job description for a Senior Backend Engineer role involving software development with Node.js, JavaScript, TypeScript, and Java. The role requires strong backend development skills, understanding of SDLC, testing, CI/CD, and performance optimization. A coding challenge is warranted to assess the candidate’s ability to design and implement scalable backend services, write clean and maintainable code, and demonstrate testing skills.

  

Code Challenge

Challenge Title:

Build a Scalable RESTful API Service with Node.js and TypeScript

  

Challenge Description:

You are tasked with building a simple backend service that manages a collection of "Tasks" for a to-do application. The service should expose a RESTful API with the following capabilities:

  
  
  

Create a new task

  

Retrieve all tasks

  

Retrieve a single task by ID

  

Update a task’s status (e.g., pending, completed)

  

Delete a task

  
  
  

Each task should have the following properties:

  

id (string, UUID)

  

title (string, required)

  

description (string, optional)

  

status (string, one of: "pending", "in-progress", "completed"; default: "pending")

  

createdAt (timestamp)

  

updatedAt (timestamp)

  
  
  
  

Requirements:

  

Implement the API using Node.js and TypeScript.

  

Use an in-memory data store (e.g., an array) to keep tasks (persistence is not required).

  

Validate input data and handle errors gracefully.

  

Write at least unit tests for the core business logic (e.g., task creation and status update).

  

Use proper TypeScript types/interfaces.

  

The API should follow RESTful conventions and return appropriate HTTP status codes.

  

Include brief documentation (e.g., README or comments) on how to run and test the service.

  
  

Bonus (Optional if time permits):

Implement pagination for the "Retrieve all tasks" endpoint.

  

Add filtering by status on the "Retrieve all tasks" endpoint.

  

Technologies Relevant to the Challenge

Node.js (runtime)

  

TypeScript (language)

  

Express.js or any minimal HTTP server framework (optional, but recommended)

  

Jest or any testing framework for unit tests

  

UUID generation library (e.g., uuid npm package)

  
  

External Resources

Node.js - Free runtime environme