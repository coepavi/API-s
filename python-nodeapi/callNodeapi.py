import requests
response = requests.get("http://13.233.45.35:8000/getdata")
print(response)
print(response.text)

PARAMS = {'address':"COEP Pune"}
response = requests.get("http://13.233.45.35:8000/postdata", params = PARAMS) 
print(response)
print(response.text)
