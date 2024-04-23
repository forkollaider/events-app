export const formatResponse = (statusCode: number, body: Record<string,any> | Record<string, any>[]) => {
    const headers = {
        "Access-Control-Allow-Headers" : "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET, PUT, DELETE"
    };
    return { statusCode, body: JSON.stringify(body), headers }
}