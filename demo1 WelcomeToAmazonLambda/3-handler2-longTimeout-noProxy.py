# Use this code if you don't use the http event with the LAMBDA-PROXY integration

import time

def hello(event,context) :
    print("console-log : python sample code for timeout demo (without LAMBDA-PROXY integration)")
    time.sleep(6)
    # return "SUCCESS, managed to complete task within time-out "
    return {
            "message": "SUCCESS, managed to complete task within time-out!",
            "event": event
    }


# output :
#
# {
#   "message": "SUCCESS, managed to complete task within time-out!",
#   "event": {
#     "key1": "input 111",
#     "key2": "input 222",
#     "key3": "input 333"
#   }
# }
