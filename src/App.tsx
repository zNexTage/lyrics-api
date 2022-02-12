import React, { useEffect } from 'react';
import VagalumeApi from './Api/VagalumeApi';
import NormalizeLyrics from './DataLayer/NormalizeLyric';
import VagalumeResponse from './DataLayer/VagalumeResponse';
import FetchHttpClient from './Infra/FetchHttpClient';
import LyricPage from './Presentation/Lyric';

const App = () => {
  const vagalumeApi = new VagalumeApi();
  const normalizeData = new NormalizeLyrics();
  const responseHandler = new VagalumeResponse(normalizeData);

  const httpClient = new FetchHttpClient(vagalumeApi, responseHandler);

  return (
    <main className='w-100 h-100 overflow-hidden'>
      <LyricPage httpClient={httpClient} />
    </main>
  );
}

export default App;
