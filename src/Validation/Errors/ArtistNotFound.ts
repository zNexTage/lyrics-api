class ArtistNotFound extends Error {
    constructor() {
        super(`Artista não encontrada.`);

        this.name = this.constructor.name;

        Error.captureStackTrace(this, this.constructor);
    }
}

export default ArtistNotFound;