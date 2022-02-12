interface INormalizeData<ResponseData, NormalizedData> {
    handler(responseData: ResponseData): NormalizedData
}

export default INormalizeData;