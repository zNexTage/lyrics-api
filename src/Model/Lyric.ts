class Artist {
    constructor(
        public id: string,
        public name: string,
        public url: string
    ) { }
}

class Music {
    constructor(
        public id: string,
        public name: string,
        public text: string,
        public url: string
    ) { }
}

class Lyric {
    constructor(
        public artist: Artist,
        public music: Music
    ) { }
}

export default Lyric;