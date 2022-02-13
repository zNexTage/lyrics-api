import INormalizeData from "../Domain/INormalizeData";
import IResponse from "../Domain/IResponse";
import Lyric from "../Model/Lyric";
import ArtistNotFound from "../Validation/Errors/ArtistNotFound";
import SongNotFound from "../Validation/Errors/SongNotFound";
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
                throw new ArtistNotFound();
            }
            case LyricResponseType.SONG_NOT_FOUND: {
                throw new SongNotFound();
            }
            default: throw new Error('Não foi possível obter a letra da música solicitada.');
        }
    }

}

export default VagalumeResponse;