import INormalizeData from "../Domain/INormalizeData";
import IResponse from "../Domain/IResponse";
import Lyric from "../Model/Lyric";
import LyricResponse, { LyricResponseType } from "./LyricResponse";


class VagalumeResponse implements IResponse<LyricResponse, Lyric> {
    constructor(
        private normalizeData: INormalizeData<LyricResponse, Lyric>
    ) { }

    handler(responseData: LyricResponse): Lyric {
        switch (responseData.type) {
            case LyricResponseType.APROX:
            case LyricResponseType.EXACT: {
                return this.normalizeData.handler(responseData);
            }
            case LyricResponseType.NOT_FOUND: {
                throw new Error("Artista não foi encontrado");
                
                break;
            }
            case LyricResponseType.SONG_NOT_FOUND: {
                throw new Error("Música não encotrada");
                break;
            }
        }
    }

}

export default VagalumeResponse;