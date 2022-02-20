import { Duration, RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { RestApi } from 'aws-cdk-lib/aws-apigateway';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Code } from 'aws-cdk-lib/aws-lambda';
import { AttributeType, Table } from 'aws-cdk-lib/aws-dynamodb';

export class CdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // const api = new RestApi(this, 'test-api');

    const lambda = new NodejsFunction(this, 'test-function', {
      entry: './src/lambda/index.ts',
      handler: 'index.handler',
      memorySize: 512,
      timeout: Duration.seconds(10),
    });

    const table = new Table(this, 'item', {
      partitionKey: {
        name: 'itemId',
        type: AttributeType.STRING,
      },
      tableName: 'items',
      removalPolicy: RemovalPolicy.DESTROY
    });
  }
}
