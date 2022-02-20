const TABLE_NAME = process.env.TABLE_NAME || "";
const PRIMARY_KEY = process.env.PRIMARY_KEY || "";

export const handler = async (event: any = {}): Promise<any> => {
    const requestedItemId = event.pathParameters.id;
    if (!requestedItemId) {
        return {
            statusCode: 400,
            body: 'Error: You are missing the path parameter id',
        }
    }

    const params = {
        TableName: TABLE_NAME,
        Key: {
            [PRIMARY_KEY]: requestedItemId,
        }
    };
}