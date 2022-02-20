import { useState } from "react";
import Button from "../Components/Button";
import TextField from "../Components/TextField";
import IHttpGetLyrics from "../DataLayer/IHttpGetLyrics";
import Lyric from "../Model/Lyric";
import Validator from "../Validation/Validator";
import RequiredFieldValidation from "../Validation/Validators/RequiredFieldValidation";
import style from './Lyric.module.css';


const LyricForm = (
    { httpClient, onLyricRequestSuccess }: {
        httpClient: IHttpGetLyrics<Lyric>,
        onLyricRequestSuccess: (lyric: Lyric) => void,
    },

) => {
    const [loading, setLoading] = useState<boolean>(false);

    const onSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement

        const formData = new FormData(form);

        const artist = `${formData.get('artist')}`;
        const music = `${formData.get('music')}`;

        const validator = new Validator([
            new RequiredFieldValidation('Artista', artist),
            new RequiredFieldValidation('Música', music)
        ]);

        const result = validator.validate();

        if (!result.isValid) {
            const resultFailed = result.getError();

            alert(resultFailed);

            return;
        }

        setLoading(true);

        try {
            const lyric: Lyric = await httpClient.get(artist, music);
            onLyricRequestSuccess(lyric);
            form.reset();
        }
        catch (err) {
            if (err instanceof Error) alert(err.message);
            else alert('Um erro inesperado ocorreu e não foi possível obter a letra da música.')
        }
        finally {
            setLoading(false);
        }

    }



    return (
        <form onSubmit={onSubmit} className={`w-100 ${style.LyricForm}`}>
            <fieldset className={style.LyricFormFieldset}>
                <h1 className="text-center">
                    Lyrics Finder
                </h1>
                <TextField
                    containerProps={{
                        className: style.LyricFormField
                    }}
                    inputProps={{
                        type: 'text',
                        id: 'txtArtist',
                        name: 'artist',
                        required: true,
                        disabled: loading
                    }}
                    labelProps={{
                        text: 'Artista',
                        htmlFor: 'txtArtist'
                    }}
                />

                <TextField
                    containerProps={{
                        className: style.LyricFormField
                    }}
                    inputProps={{
                        type: 'text',
                        id: 'txtMusic',
                        name: 'music',
                        required: true,
                        disabled: loading
                    }}
                    labelProps={{
                        text: 'Música',
                        htmlFor: 'txtMusic'
                    }}
                />
                <Button disabled={loading}>
                    {loading ? 'Aguarde...' : 'Buscar letra'}
                </Button>
            </fieldset>
        </form>
    )
}

const LyricArea = ({ lyric }: { lyric: Lyric | undefined }) => (
    <section className={`overflow-auto w-100 h-100 ${style.LyricAreaContainer}`}>
        {lyric &&
            <>
                <h1>
                    {lyric.artist.name}
                </h1>
                <h2>
                    {lyric.music.name}
                </h2>
                <pre className={style.LyricText}>
                    {lyric.music.text}
                </pre>
            </>
        }
        {!lyric &&
            <div className={style.LyricHelper}>
                <p>
                    Informe o nome do artista e a música para consultar a letra!!!
                </p>
            </div>
        }
    </section>
)

const LyricPage = ({ httpClient }:
    {
        httpClient: IHttpGetLyrics<Lyric>
    }) => {
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