import StringBuilder from "../Builder/StringBuilder"
import ILyricApi from "./IApi";

class VagalumeApi implements ILyricApi {
    static BASE_URL = "https://api.vagalume.com.br/search.php";

    getUrl(artistName: string, musicName: string) {
        const url = new StringBuilder(VagalumeApi.BASE_URL);

        url.append(`?art=${artistName}`);
        url.append(`&mus=${musicName}`);
        url.append(`&apikey=${process.env.REACT_APP_LYRIC_API}`);

        return url.toString();
    }
}

export default VagalumeApi;