class ArtistResponse {
    constructor(
        public id: string,
        public name: string,
        public url: string
    ) { }
}

export class MusicResponse {
    constructor(
        public id: string,
        public name: string,
        public text: string,
        public url: string
    ) { }
}

export enum LyricResponseType {
    EXACT = 'exact',
    APROX = 'aprox',
    SONG_NOT_FOUND = 'song_notfound',
    NOT_FOUND = 'notfound'
}

class LyricResponse {
    constructor(
        public type: LyricResponseType,
        public art: ArtistResponse,
        public mus: Array<MusicResponse> 
    ) { }
}


export default LyricResponse;