

interface IResponse<ResponseData, NormalizedData> {
    handler(responseData: ResponseData): NormalizedData;
}


export default IResponse;