export const formatResponse = (statusCode: number, body: Record<string,any> | Record<string, any>[]) => {
    return { statusCode, body: JSON.stringify(body) }
}