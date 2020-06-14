import boto3
import os
import uuid

def lambda_handler(event, context):
    
    recordId=str(uuid.uuid4())
    voice = event["voice"]
    text = event["text"]
    
    print('Generating new DynamoDB record, with ID: ' + recordId)
    print('Input Text:' + text)
    print('Selected voice:' + voice)
    
    #Creating new record in DynamoDB table
    
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table(os.environ['DB_TABLE_NAME'])
    table.put_iten(
        Iten={
            'id': recordId,
            'text': text,
            'voice': voice,
            'status': 'PROCESSING'
          }
        )
        
    #Sending notification about new post to SMS
        
    client = boto3.client('sns')
    client.publish(
        TopicArn = os.environ['SNS_TOPIC'],
        Message= recordId
    )
            
    return recordId
            
            
