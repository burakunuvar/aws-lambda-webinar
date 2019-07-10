// jshint esversion : 8
// Use this code if you don't use the http event with the LAMBDA-PROXY integration
//

var messages = [
    {part1:"Break a Monolith Application into Microservices"} ,
    {part2:"Use Cases and References"},
    {part3:"Intro to AWS Lambda"},
    {part4:"Pricing and Limits"},
    {part5:"Serverless Frameworks and Monitoring"},
    {demo1:"Welcome to Amazon Lambda"},
    {demo2:"Intro to Amazon API Gateway"} ,
    {demo3:"Using AWS Lambda with Amazon S3"},
    {demo4:"Serverless REST API with AWS SAM"},
    {demo5:"Serverless Framework"},
    {UseCase1:"REAL-TIME FILE PROCESSING"},
    {UseCase2:"REAL-TIME STREAM PROCESSING"} ,
    {UseCase3:"BACKENDS FOR MOBILE AND WEB APPLICATIONS"} ,
];


exports.handler = async (event) => {
  console.log ("console-log : node8 random function (without LAMBDA-PROXY integration");
    let message = messages[Math.floor(Math.random()*10)];
    return message;
};

// exports.handler = async (event) => {
//     // TODO implement
//     const response = {
//         statusCode: 200,
//         body: JSON.stringify('Hello from Lambda!'),
//     };
//     return response;
// };
