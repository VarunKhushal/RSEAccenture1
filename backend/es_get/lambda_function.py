import json

from requests_aws4auth import AWS4Auth
import boto3
import requests

import traceback

''' 
Inputs:
    product_name: string (optional)
    page: integer (optional)
'''

# Get products
def lambda_handler(event, context):
    try:
        # Set up some credentials for AWS
        region = 'us-east-2' # For example, us-west-1
        service = 'es'
        credentials = boto3.Session().get_credentials()
        awsauth = AWS4Auth(credentials.access_key, credentials.secret_key, region, service, session_token=credentials.token)

        url = 'http://search-slp-es-database-7docgoiohso2wq5yypuwhvsuwq.us-east-2.es.amazonaws.com/'

        # Check if request has `page`. Must be an integer.
        page = 0
        if 'page' in event:
            try:
                page = int(event['page'])
            except ValueError:
                return {
                        'statusCode': 400,
                        'body': json.dumps('Bad Request. \'page\' must be an integer.')
                        }

        # If the user doesn't provide a product_name, just search for everything
        if 'product_name' in event:
            query = {
                    "match": {
                        "product_name": event['product_name']
                        }
                    }
        else:
            query = {
                    "match_all": {}
                    }

        # Search payload
        payload = {
                "query": query,
                "sort": [
                    { "date_created": "desc"}
                    ],
                "from": page * 10
                }

        # Make the request
        r = requests.get(url + 'product/_search', auth=awsauth, json=payload)
        print(r.text)

        # Gather the data
        data = json.loads(r.text)
        hits = list(map(lambda x: x['_source'], data['hits']['hits']))
        print(hits)


        return {
                'statusCode': 200,
                'body': json.dumps(hits)
                }

    except Exception as e:
        print(e)
        return {
                'statusCode': 500,
                'body': json.dumps('Internal Server Error.' + json.dumps(traceback.format_exc()))
                }
