### demo2:"Intro to Amazon API Gateway"

=> Step 1 : Create a new function (random-function) through the management console ( node )

 - Switch code from node 8 to node 6 (asynch vs await) through AWS Cloud9, to view versions and proxy integration)

=> Step 2 : First step to Amazon API Gateway

  - Create a new API , with resource (name:welcome ,path:welcome) and GET method

  - Build a GET method with Mock Integration, update response as :

  ```
  {
   "message" : "API GATEWAY MOCK RESPONSE "
  }
  ```

  - Build a GET method with Lambda Integration, by using random-function

  If same response as Mock is required, you could update Integration Response as :

  ```
  {
   "message" : $input.body
  }
  ```
  - Enable Lambda proxy integration and switch the code to send JSON instead of object

  - Test and Deploy the API

=> Step 3 : Using pathParameters and queryStringParameters

  - Build the second resource under the first API with a GET method.

  - Create a new resource with the name path as "{webinarname}" and method as "GET"

  - Build a GET method with Lambda Integration, by creating and using webinarContent function

  - Test the API with correct path and queryString parameters, and then deploy

=> Step 4 : Creating a POST method

  - Build a new resource for the existing API with a POST request

  - Build a POST method without Lambda Integration, by using calculator function

=> Step 5: Deploy API and test urls (you could use postman for post request)

Further details about [Creating, Deploying, and Invoking a REST API in Amazon API Gateway ](https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html)
