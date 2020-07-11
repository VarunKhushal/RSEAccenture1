set +x
zip -g function.zip lambda_function.py
aws lambda update-function-code --function-name es_post_2 --zip-file fileb://function.zip 
