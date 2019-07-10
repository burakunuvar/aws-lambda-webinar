/*jshint node: true */
/*jshint esversion: 8 */

'use strict';

// Opt 1 : for LAMBDA-PROXY integration
module.exports.hello = async (event) => {
  console.log("CONSOLE : === Introduction to AWS Lambda and Serverless Framework ===");
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Update 1 :Introduction to AWS Lambda and Serverless Framework',
      input: event,
    }, null, 2),
  };
};


// Opt 2: Use this code if you don't use the http event with the  LAMBDA-PROXY integration

// module.exports.hello = async (event) => {
//   console.log("CONSOLE : === Introduction to AWS Lambda and Serverless Framework ===");
//   return { message: 'Introduction to AWS Lambda and Serverless Framework', event };
// };
