
###  <u>  AWS Lambda and Serverless Framework

  ####  Step 1 : Getting Ready

  =>  Setup AWS Account and IAM Credentials for a new user such as 'serverless-admin'

  =>  Install dependencies : ([node](https://nodejs.org/en/download/) & [AWS CLI](https://aws.amazon.com/tr/cli/))

  =>  Install [Serverless Framework](https://serverless.com/framework/docs/providers/aws/guide/installation/)

  => Configure the Serverless Framework to use your AWS API Key & Secret : [related link](https://serverless.com/framework/docs/providers/aws/cli-reference/config-credentials/)

  ```
  serverless config credentials --provider aws --key AKIAIOSFODNN7EXAMPLE --secret wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY --profile serverless-admin

  ```

####  Step 2 : Deploy Your First Function

=> Use the Serverless boilerplates

```
$ sls create --template aws-nodejs --path my-first-service
```

=> Go into created directory and make updates on handler.js and serverless.yml if necessary

```
provider:
  name: aws
  runtime: nodejs8.10
  profile: serverless-admin
  region: eu-west-1

```

=> Deploy your function and invoke via CLI

```
sls deploy -v
sls invoke -f hello -l

```

=> Update your function without installing from scratch :

```
sls deploy function -f hello
```

=> Fetch the logs from CLI :

```
sls logs -f hello -t
```
=> Remove the stack ( function, logs, IAM , ...)

```
sls remove
```

####  Step 3 : AWS Lambda In-Depth

=> Updating memory and timeout

  Alternative 1 : particular update on separate functions, in serverless.yml


```
functions:
  hello-short-timeout:
    handler: handler.hello
    memorySize: 128
    timeout: 3
  hello-long-timeout:
    handler: handler.hello
    memorySize: 256
    timeout: 6
```

  Alternative 2 : generic update for all functions, in serverless.yml

```
provider:
  name: aws
  runtime: python2.7
  memorySize: 512
  timeout: 5
```

Note : for different versions of templates`sls create --template` will list all alternatives

```
$ sls create --template aws-python3 --path python3-sample
$ sls create --template aws-python --path python-sample
```

=> Update IAM permissions

=> Update Environment Variables , to provide external configuration to the functions (database password, APIs, url etc...)

```
functions:
  hello-prod:
    handler: handler.hello
    environment:
      password: "PASSWORD"

```

Or use it at the top of yaml under profile, to be applicable for all functions :

```
provider:
  environment:
    variable1: value1
    variable2: value2
    password: password
```

=> Deploying Lambda in a VPC

```
provider:
  vpc:
    securityGroupIds:
      - sg-8a73a7fb
    subnetIds:
      - subnet-c69251b1
      - subnet-07816c5e

```



  => Summary for a [Quick Start](https://serverless.com/framework/docs/providers/aws/guide/quick-start/)

  => Useful hints for [Node8 & lambda ](https://serverless.com/blog/common-node8-mistakes-in-lambda/)

  => [AWS Lambda Pricing](https://aws.amazon.com/lambda/pricing/) and [Calculator](https://s3.amazonaws.com/lambda-tools/pricing-calculator.html)

  https://docs.aws.amazon.com/lambda/latest/dg/with-s3-example.html
