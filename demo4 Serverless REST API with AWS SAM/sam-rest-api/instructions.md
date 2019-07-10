```
$ npm init
$ npm install aws-sdk

$ sam validate
$ aws s3 mb s3://buraku-sam-rest-api
& sam package --template-file template.yaml --output-template-file sam.yaml --s3-bucket buraku-sam-rest-api
$ sam deploy --template-file sam.yaml --stack-name sam-rest-api --capabilities CAPABILITY_IAM
```
