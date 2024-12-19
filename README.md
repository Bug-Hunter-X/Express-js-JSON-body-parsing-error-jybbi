# Express.js JSON Body Parsing Bug

This repository demonstrates a common issue in Express.js applications where JSON request bodies are not correctly parsed.  The problem arises when the `Content-Type` header in the request is missing or does not specify `application/json`. This results in `req.body` being empty, leading to unexpected behavior and errors.

## Bug Description

The provided `bug.js` demonstrates an Express.js application that attempts to parse a JSON request body. However, if the client sending the request omits or misconfigures the `Content-Type` header, the request body will not be parsed correctly. This will lead to unexpected behavior in the application.

## Solution

The `bugSolution.js` demonstrates the solution which is to ensure that the body-parser middleware is used before defining routes and that it is configured correctly to handle the JSON payload.  In most cases, setting `app.use(express.json());` before any route handlers will resolve the issue.

## How to Reproduce

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `node bug.js` to start the server with the bug.
5. Send a POST request to `http://localhost:3000/user` with a JSON payload but without or with an incorrect `Content-Type` header.
6. Observe that the server logs an empty `req.body`.
7. Then run `node bugSolution.js` to start the server with the solution and repeat steps 4 and 5 to see the difference.
