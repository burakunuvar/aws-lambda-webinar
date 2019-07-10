[SAM-CLI Installation Guide] (https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html )


```
$ npm init
$ npm install aws-sdk

$ sam validate
$ aws s3 mb s3://buraku-sam-rest-api
& sam package --template-file template.yaml --output-template-file sam.yaml --s3-bucket buraku-sam-rest-api
$ sam deploy --template-file sam.yaml --stack-name sam-rest-api --capabilities CAPABILITY_IAM
```


aws cloudformation deploy --template-file /Users/burakunuvar/Desktop/Amazon Lambda Webinar/demo4 Serverless REST API with AWS SAM/sam-rest-api/sam.yaml --stack-name <YOUR
 STACK NAME>
