# Lyrics Api
A aplicação consiste em solicitar, atráves de um formulário, o nome de um artista e uma música de sua autoria. A aplicação enviará esses dados para a API do vagalume e como resposta será obtido a letra da música.

## Passo a passo para rodar a aplicação
1. Clone o repositório;
2. Rode o comando `npm i`;
3. Crie sua chave de autenticação no site do [Vagalume](https://auth.vagalume.com.br/)
4. Copie a chave e crie um arquivo .env na raiz do projeto;
5. Preencha o arquivo .env da seguinte maneira: 
         REACT_APP_LYRIC_API=CHAVE_SECRETA_GERADA_NO_SITE_DO_VAGALUME
6. Execute o comando `npm start` para iniciar a aplicação.
