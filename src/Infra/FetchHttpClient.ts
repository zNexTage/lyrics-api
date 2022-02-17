import ILyricApi from "../Api/IApi";
import IHttpGetLyrics from "../DataLayer/IHttpGetLyrics";
import LyricResponse from "../DataLayer/LyricResponse";
import IResponse from "../Domain/IResponse";
import Lyric from "../Model/Lyric";

class FetchHttpClient implements IHttpGetLyrics<Lyric> {
    constructor(
        private lyricApi: ILyricApi,
        private responseHandler: IResponse<LyricResponse, Lyric>
    ) { }

    async get(artistName: string, musicName: string): Promise<Lyric> {
        let response, responseData;

        try {
            response = await fetch(this.lyricApi.getUrl(artistName, musicName))

            responseData = await response.json() as LyricResponse;
        }
        catch (err) {
            throw new Error('Ocorreu um erro e não foi possível obter a letra da música.');
        }

        try {
            return this.responseHandler.handler(responseData);
        }
        catch (err) {
            throw err;
        }
    }

}

export default FetchHttpClient;