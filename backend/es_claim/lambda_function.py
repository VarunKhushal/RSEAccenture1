import json

from requests_aws4auth import AWS4Auth
import boto3
import requests

import traceback
from datetime import datetime

''' 
Inputs:
    id: string
    claim: boolean
'''

required_attributes = ['id', 'claim']

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

        # Check that the document isn't already claimed
        r = requests.get(url + 'product/_doc/{}'.format(data['id']), auth=awsauth)
        doc = json.loads(r.text)
        print(doc)
        claimed = doc['_source']['claimed']

        # If the claim action is False and claimed is True,
        # or if claim action is True and claimed is False, go ahead and make change
        if claimed != data['claim']:
            payload = {
                    "doc": {
                        "claimed": data['claim']
                        } 
                    }
            r = requests.post(url + 'product/_update/{}'.format(data['id']), json=payload, auth=awsauth)
            return {
                    'statusCode': 200,
                    'body': json.dumps(r.text)
                    }
        else:
            return {
                    'statusCode': 400,
                    'body': 'Bad request. Document is already claimed/unclaimed.'
                    }

    except Exception as e:
        print(e)
        return {
                'statusCode': 500,
                'body': json.dumps('Internal Server Error.' + json.dumps(traceback.format_exc()))
                }
