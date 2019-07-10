// jshint esversion : 9
const content = {
   "part1":"Break a Monolith Application into Microservices",
   "part2":"Use Cases and References",
   "part3":"AWS SAM and Serverless Framework",
   "part4":"Pricing and Limits",
   "part5":"Intro To Advanced Features",
   "demo1":"Welcome to Amazon Lambda",
   "demo2":"Intro to Amazon API Gateway",
   "demo3":"Using AWS Lambda with Amazon S3",
   "demo4":"Serverless REST API with AWS SAM",
   "usecase1":"REAL-TIME FILE PROCESSING",
   "usecase2":"REAL-TIME STREAM PROCESSING" ,
   "usecase3":"BACKENDS FOR MOBILE AND WEB APPLICATIONS",
};

exports.handler = async (event) => {
    let webinarName = event.pathParameters.webinarname;
    let {title, ...others} = event.queryStringParameters || {};
    let message = `welcome to ${webinarName} webinar `;
    let response = {
        message: message,
        yourRequest: `${title} : ${content[title] ? content[title] : content.part1 } `,
    };

    return {
        statusCode: 200,
        // headers: {
        //   "Access-Control-Allow-Origin" : "*"
        // },
        body: JSON.stringify(response)
    };
};
