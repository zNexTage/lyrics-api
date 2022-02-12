import LyricResponse from "./LyricResponse";

interface IHttpGetLyrics<NormalizedData> {
    get(artistName: string, music: string): Promise<NormalizedData>
}

export default IHttpGetLyrics;