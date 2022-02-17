import INormalizeData from "../Domain/INormalizeData";
import Lyric from "../Model/Lyric";
import LyricResponse, { MusicResponse } from "./LyricResponse";


class NormalizeLyrics implements INormalizeData<LyricResponse, Lyric> {


    handler(responseData: LyricResponse): Lyric {
        const responseMusic = responseData.mus.pop() as MusicResponse;

        const lyric = new Lyric({
            id: responseData.art.id,
            name: responseData.art.name,
            url: responseData.art.url
        }, responseMusic);

        return lyric;
    }

}

export default NormalizeLyrics;