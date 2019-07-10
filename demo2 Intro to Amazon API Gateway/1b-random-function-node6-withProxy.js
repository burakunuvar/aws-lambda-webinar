// jshint esversion : 6
// http event with the LAMBDA-PROXY integration; returns JSON

var messages = [
    {part1:"Break a Monolith Application into Microservices"} ,
    {part2:"Use Cases and References"},
    {part3:"Intro to AWS Lambda"},
    {part4:"Pricing and Limits"},
    {part5:"Intro To Advanced Features"},
    {demo1:"Welcome to Amazon Lambda"},
    {demo2:"Intro to Amazon API Gateway"} ,
    {demo3:"Using AWS Lambda with Amazon S3"},
    {demo4:"Serverless REST API with AWS SAM"},
    {demo5:"Serverless Framework"},
    {UseCase1:"REAL-TIME FILE PROCESSING"},
    {UseCase2:"REAL-TIME STREAM PROCESSING"} ,
    {UseCase3:"BACKENDS FOR MOBILE AND WEB APPLICATIONS"} ,
];


// exports.handler = function(event, context, callback) {
//     let message = messages[Math.floor(Math.random()*10)];
//     callback(null, message);
// };

// node 6
exports.handler = (event, context, callback) => {
    // TODO implement
    console.log ("console-log : node6 random function (with LAMBDA-PROXY integration)");
    let message = messages[Math.floor(Math.random()*10)];
    const response = {
        statusCode: 200,
        body: JSON.stringify(message),
    };
    callback(null, response);
};
