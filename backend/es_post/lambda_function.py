import json

from requests_aws4auth import AWS4Auth
import boto3
import requests

import traceback
from datetime import datetime

''' 
Inputs:
    product_name: string
    image_link: string
    description: string
    quantity: integer
    units: string
'''

required_attributes = ['product_name', 'image_link', 'description', 'quantity', 'units']

# Get products
def lambda_handler(event, context):
    try:
        # Set up some credentials for AWS
        region = 'us-east-2' # For example, us-west-1
        service = 'es'
        credentials = boto3.Session().get_credentials()
        awsauth = AWS4Auth(credentials.access_key, credentials.secret_key, region, service, session_token=credentials.token)

        url = 'http://search-slp-es-database-7docgoiohso2wq5yypuwhvsuwq.us-east-2.es.amazonaws.com/'
        
        if 'body' not in event:
            event['body'] = {}
            
        # Get data
        if isinstance(event['body'], str):
            data = json.loads(event['body'])
        else:
            data = event['body']


        # Check all attributes are given
        for attr in required_attributes:
            if attr not in data:
                return {
                        'statusCode': 400,
                        'body': json.dumps('Bad Request. Missing field: {}'.format(attr))
                        }


        # Check that quantity is an integer
        try:
            int(data['quantity'])
        except ValueError:
            return {
                    'statusCode': 400,
                    'body': json.dumps('Bad Request. Quantity must be an integer.')
                    }

        # Create the payload
        payload = {
                "product_name": data['product_name'],
                "image_link": data['image_link'],
                "description": data['description'],
                "quantity": data['quantity'],
                "units": data['units'],
                "date_created": datetime.now().isoformat(),
                "claimed": False
                }

        print(payload)

        # Make the request
        r = requests.post(url + 'product/_doc', auth=awsauth, json=payload)
        print(r.text)

        # If the request failed
        if r.status_code != 201:
            return {
                    'statusCode': 500,
                    'body': json.dumps('Internal Server Error.')
                    }

        return {
                'statusCode': 201,
                'body': json.dumps(r.text)
                }

    except Exception as e:
        print(e)
        return {
                'statusCode': 500,
                'body': json.dumps('Internal Server Error.' + json.dumps(traceback.format_exc()))
                }

