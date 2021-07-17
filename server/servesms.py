import requests
import json

url = "https://us-central1-aiot-fit-xlab.cloudfunctions.net/sendsms"

data= { "token" : "hackers", "receiver" : "13218775974", "message" : "some text here" }
payload = json.dumps(data)

headers = {
    'Content-Type': "application/json",
    'cache-control': "no-cache",
    'Postman-Token': "42c4728a-46fd-421c-aa53-9bc82bf3ddc2"
    }

response = requests.request("POST", url, data=payload, headers=headers)

print(response.text)