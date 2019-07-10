

import json

def lambda_handler(event, context):
    # TODO implement
    print("console-log : python sample code")
    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }
