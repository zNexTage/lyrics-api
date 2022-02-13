class SongNotFound extends Error {
    constructor() {
        super(`Música não encontrada.`);

        this.name = this.constructor.name;

        Error.captureStackTrace(this, this.constructor);
    }
}

export default SongNotFound;