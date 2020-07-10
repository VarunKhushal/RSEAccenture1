import requests
from datetime import datetime
import json

print(datetime.now().isoformat())

RESET = True

url = 'http://search-slp-es-database-7docgoiohso2wq5yypuwhvsuwq.us-east-2.es.amazonaws.com/'
# url = url + 'kibana_sample_data_ecommerce/' 

# Delete the index
if RESET == True:
    r = requests.delete(url + 'product')

# Set the mappings
payload = {
        "mappings": {
            "properties": {
                "product_name": { "type": "text", "fielddata": True },
                "image_link": { "type": "text" },
                "description": { "type": "text" },
                "quantity": { "type": "integer" },
                "units": { "type": "text", "fielddata": True },
                "date_created": { "type": "date" }
                }
            }
        }

if RESET == True:
    r = requests.put(url + 'product', json=payload)

# Search up all products
payload = {
        "query": {
            "match_all": {}
            },
        "sort": [
            { "date_created": "desc"}
            ],
        "from": 10
        }

r = requests.get(url + 'product/_search', json=payload)
# print(r.text)
data = json.loads(r.text)
# print(data)
# print()
# print(data['hits'])
# print()
# print(data['hits']['hits'])
# print()
# print(data['hits']['hits'][0]['_source'])
# print()

# Grab out the relevant parts
stuff = list(map(lambda x: x['_source'], data['hits']['hits']))
print(stuff)
print()
print(r.status_code)

# Search with keyword for title
payload = {
        "query": {
            "match": {
                "product_name": "toothpaste"
                }
            },
        "sort": [
            { "product_name": "desc"}
            ]
        }

r = requests.get(url + 'product/_search', json=payload)
print(r.text)
print()


# Seed in some data
payloads = [
        {
            "product_name": "Toilet Paper",
            "image_link": "https://www.bigw.com.au/medias/sys_master/images/images/h4b/h1a/14303417204766.jpg",
            "description": "Soft, triple ply, what else could you ask for?",
            "quantity": 36,
            "units": "rolls",
            "date_created": datetime.fromisoformat('2020-06-01T04:58:36.507109').isoformat()
            },
        {
            "product_name": "Instant Ramen",
            "image_link": "https://cdn0.woolworths.media/content/wowproductimages/medium/110285.jpg",
            "description": "Mi goreng at its best.",
            "quantity": 1,
            "units": "pack",
            "date_created": datetime.fromisoformat('2020-07-05').isoformat()
            },
        {
            "product_name": "Colgate Toothpaste",
            "image_link": "https://www.wired.com/wp-content/uploads/archive/images/article/magazine/1510/st_colgate_f.jpg",
            "description": "No idea how many doctors out of 10 recommend this...",
            "quantity": 12,
            "units": "tubes",
            "date_created": datetime.fromisoformat('2020-03-20').isoformat()
            },
        ]
if RESET == True:  
    for payload in payloads:
        r = requests.post(url + 'product/_doc', json=payload)
        print(r.text)
        print()

# For seeding in more data to see pages
#    for i in range(15):
#        payload = payloads[2]
#        payload['quantity'] = i
#        r = requests.post(url + 'product/_doc', json=payload)
#        print(r.text)
#        print()




