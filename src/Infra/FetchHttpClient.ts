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
        debugger
        const response = await fetch(this.lyricApi.getUrl(artistName, musicName))

        const responseData = <LyricResponse>await response.json();

        return this.responseHandler.handler(responseData);
    }

}

export default FetchHttpClient;