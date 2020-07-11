set +x
zip -g function.zip lambda_function.py
aws lambda update-function-code --function-name es_claim --zip-file fileb://function.zip 
