# http event with the LAMBDA-PROXY integration; returns JSON

import json
import time

def hello(event, context):
    print("console-log : python sample code for timeout demo (with LAMBDA-PROXY integration)")
    time.sleep(3)
    body = {
        "message": "SUCCESS, managed to complete task within time-out",
        "input": event
    }

    response = {
        "statusCode": 200,
        "body": json.dumps(body)
    }

    return response


# Output:
# {
#   "statusCode": 200,
#   "body": "{\"message\": \"SUCCESS, managed to complete task within time-out\", \"input\": {\"key1\": \"input 111\", \"key2\": \"input 222\", \"key3\": \"input 333\"}}"
# }
