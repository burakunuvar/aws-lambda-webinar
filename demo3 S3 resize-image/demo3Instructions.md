### demo3:"Using AWS Lambda with Amazon S3"

=> Step 1 :

 -  Create a Lambda function with S3 Access
 -  Adjust timeout ( as 3 seconds might not be enough to process image )

=> Step 2 :

 - Build the code with necessary packages such as aws-sdk , use export handler for invocation

=> Step 3 :

  - Build two separate S3 buckets as resource and destination ("testbucket" vs "testbucketresized")
  - Configure resource bucket to Publish Events to Amazon Lambda

```
Name – lambda-trigger.
Events – ObjectCreate (All).
Send to – Lambda function.
Lambda – CreateThumbnail.
```
=> Step 4 :

 - Zip and upload the file to S3

```
$ aws s3 ls
$ aws s3 ls s3://buraktestbucket
$ aws s3 cp resizeImages2.zip s3://buraktestbucket/resizeImages2.zip
```

 - Update the Lambda function with this zip

 ```
$ aws lambda list-functions
$ aws lambda update-function-code --function-name resizingImages --s3-bucket buraktestbucket --s3-key alt1.zip --publish
 ```

 => Step 5 :

 - Go through handler, logs , CloudWatch

 - [Further details and documentations](https://docs.aws.amazon.com/lambda/latest/dg/with-s3.html)
