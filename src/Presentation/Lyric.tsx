import { useState } from "react";
import Button from "../Components/Button";
import TextField from "../Components/TextField";
import IHttpGetLyrics from "../DataLayer/IHttpGetLyrics";
import Lyric from "../Model/Lyric";
import style from './Lyric.module.css';


const LyricForm = (
    { httpClient, onLyricRequestSuccess }: {
        httpClient: IHttpGetLyrics<Lyric>,
        onLyricRequestSuccess: (lyric: Lyric) => void
    },

) => {
    const onSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);

        const artist = `${formData.get('artist')}`;
        const music = `${formData.get('music')}`;

        const lyric: Lyric = await httpClient.get(artist, music);

        onLyricRequestSuccess(lyric);
    }

    return (
        <form onSubmit={onSubmit} className="w-100">
            <TextField
                inputProps={{
                    type: 'text',
                    id: 'txtArtist',
                    name: 'artist'
                }}
                labelProps={{
                    text: 'Artista',
                    htmlFor: 'txtArtist'
                }}
            />

            <TextField
                inputProps={{
                    type: 'text',
                    id: 'txtMusic',
                    name: 'music'
                }}
                labelProps={{
                    text: 'Música',
                    htmlFor: 'txtMusic'
                }}
            />

            <Button>
                Buscar letra
            </Button>

        </form>
    )
}

const LyricArea = ({ lyric }: { lyric: Lyric | undefined }) => (
    <section className="overflow-auto">
        {lyric &&
            <>
                <h1>
                    {lyric.artist.name}
                </h1>
                <h2>
                    {lyric.music.name}
                </h2>
                <pre>
                    {lyric.music.text}
                </pre>
            </>
        }
        {!lyric && <p>
            Informe o nome do artista e a música para consultar a letra!!!
        </p>}
    </section>
)

const LyricPage = ({ httpClient }: { httpClient: IHttpGetLyrics<Lyric> }) => {
    const [lyric, setLyric] = useState<Lyric>();

    const onLyricRequestSuccess = (lyricResponse: Lyric) => {
        setLyric(lyricResponse);
    }

    return (
        <section className={`w-100 h-100 overflow-auto ${style.LyricContainer}`}>
            <LyricForm
                onLyricRequestSuccess={onLyricRequestSuccess}
                httpClient={httpClient} />
            <LyricArea lyric={lyric} />
        </section>
    )
}

export default LyricPage;