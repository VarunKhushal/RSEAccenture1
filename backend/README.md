# README

This folder contains the backend API that is currently deployed on AWS Lambda. 

`./testing.py` contains helper code used to debug and develop the code.

## API 
### es_get
```
Inputs:
    product_name: string (optional)
    page: integer (optional)
```
- Items are returned in order by date_created (most recent first). Up to 10 results are returned at a time. Use `page` to specify the next set of items to retrieve. 
- If `product_name` is not given, the 10 most recent products are returned. 
- If `product_name` is given, it will search by that term.

Note: A `product_name` of 'toi' will not match with whole words like 'toilet paper'

### es_post
```
Inputs:
  product_name: string
  image_link: string
  description: string
  quantity: integer
  units: string
```
Simply post with the following parameters and it will create an entry. The date will be automatically added. Ensure the image_link url is the actual image url.

## Notes
### AWS Lambda push script
As these lambda functions require external libraries, a virtual environment was set up and dependencies installed. Then, the dependencies were zipped into a zip file.

The push script requires **AWS-CLI**. It will zip the lambda_function.py file into the zip file and then push it. 

The requirements used were:
- boto3
- requests
- requests-aws4auth

See:
- [This to see dependencies and a basic example](https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-request-signing.html#es-request-signing-python)
- [This for API and query sample code](https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/search-example.html)
- [This to prepare the venv and dependencies to push to AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/python-package.html#python-package-venv)