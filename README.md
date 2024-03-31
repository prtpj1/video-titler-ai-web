<p align="center">
  <img src="https://github.com/prtpj1/prtpj1/blob/main/Headers/VideoTitler.png?raw=true" alt="Header" />
</p>
<hr/>
<p align="center">
<a href="#description">Description</a> •
<a href="#in-this-event-i-learned-and-put-into-practice">Learning</a> •
<a href="#what-i-added-to-the-app-after-finishing-the-event">Changes post-event</a> •
<a href="#stacks">Stacks</a> •
<a href="#how-to-run-the-application">How to run the application</a>
</p>
<hr/>
<p align="center">
<a href="#descrição">Descrição</a> •
<a href="#neste-evento-aprendi-e-coloquei-em-prática">Aprendizado</a> •
<a href="#o-que-adicionei-ao-app-após-finalizar-o-evento">Mudanças pós-evento</a> •
<a href="#tecnologias-utilizadas">Tecnologias Utilizadas</a> •
<a href="#como-rodar-a-aplicação">Rodar a Aplicação</a>
</p>
<hr/>

## Description
The web application Video Titler AI creates titles or descriptions for videos using instructions given to the chatGPT AI, which uses as reference the generated transcription from a video previously uploaded by the user on the app.

After choosing the video on your computer and uploading it, the video is converted  into audio file, and the transcription is generated and displayed in the first field to the right of the menu. With the generated transcription, the user will choose whether they want the AI to create some titles for their video or if they prefer a description (the user can do both alternately). Selecting Title or Description will display a predefined prompt of instructions that the AI will follow, but the user can edit or create their own prompt.

With everything selected, the user clicks on the button "Generate" to generate the content that will be displayed in the second field on the right side, below the field where the prompt of instructions is located.

_**This app was developed during the NLW AI event by RocketSeat.**_
<br>

## In this event, I learned and put into practice:
- Use libraries to convert video to audio
- Use the OpenAI API to use AI to transcribe and create a title/description through a predefined prompt
- Create buttons with state toggling and colors according to progress

After completing the event, I started making some modifications and adding some extra features and customization.
<hr/>

## What I added to the app after finishing the event:
- Internationalization for English and Portuguese
- An extra field to display the entire text of the audio transcription
- Visual customization (colors, title, layout of the side menu and fields)

Below is a comparison of the original app and the changes/additions I made:
#### Initial State App:
<img src="https://github.com/prtpj1/prtpj1/blob/main/Apps%20Images/nlwai_01.png?raw=true" alt="image of app initial state" />

#### Customized Initial State App in english:
The initial state of the app as soon as it is accessed
<img src="https://github.com/prtpj1/prtpj1/blob/main/Apps%20Images/nlwai_02.png?raw=true" alt="image of app customized in english" />

#### Customized Initial State App in portuguese:
The initial state of the app as soon as it is accessed and the language is changed by clicking on the switch in the top right corner of the screen
<img src="https://github.com/prtpj1/prtpj1/blob/main/Apps%20Images/nlwai_05.png?raw=true" alt="image of app customized in portuguese" />

#### App customizado no estado final:
The final state of how the app looks after the video is selected, loaded, converted, and the audio transcription is done, transcription displayed, predefined prompt selected, and the result of what the AI generated (3 title options or a description with hashtags)
<img src="https://github.com/prtpj1/prtpj1/blob/main/Apps%20Images/nlwai_03.png?raw=true" alt="imagem of customized app in the final state" />

<hr/>

## Stacks 
### FrontEnd: 
- HTML
- CSS
- JavaScript
- TypeScript
- React

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/JavaScript2.png?raw=true" width="50" height="50" alt="JavaScript Icon" /></a>
<a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/html2.png?raw=true" width="50" height="50" alt="HTML Icon" /></a>
<a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/CSS2.png?raw=true" width="50" height="50" alt="CSS3 Icon" /></a>
<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/Typescript2.png?raw=true?" width="50" height="50" alt="TypeScript Icon" /></a>
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/React2.png?raw=true" width="50" height="50" alt="React Icon" /></a>
<hr/>

## How to run the application?
- Clone the repository: <br>
`git clone git@github.com:prtpj1/video-titler-ai-web.git`
- Access the project folder: <br>
`cd video-titler-ai-web`
- Install dependencies: <br>
`pnpm install`

⚠️Before starting the application, you will need to have the API working.
For this, access the [back-end](https://github.com/prtpj1/video-titler-ai-api) and follow the instructions in the README to run the server.

- Now, with the backend running, start the application: <br>
`pnpm start` <br>

⚠️Wait for the application to open in your browser. If it doesn't, enter the following in your browser's address bar: `http://localhost:4173/`
</br>
</br>
_*Note: If you have any difficulty with the instructions and want to give feedback, send me a message*_

<hr/>

## Descrição
O aplicativo web Video Titler AI cria títulos ou descrições para videos usando instruções dadas a IA do chatGPT que usa como referência a transcrição gerada de um vídeo que o usuário fez upload.</br>
Após escolher o video no seu computador e fazer o upload, o video é convertido apenas em audio e a transcrição é gerada e exibida no primeiro campo a direita do menu lateral.</br>
Com a transcrição gerada, o usuário irá escolher se quer que a IA crie alguns títulos para o seu video ou se ele prefere que seja criada uma descrição (ele pode fazer os 2 alternadamente). Selecionando Titulo ou Descrição, será exibido o prompt de instruções que a IA irá seguir, porém o usuário pode editar ou criar seu próprio prompt.</br>
Com tudo preparado, o usuário poderá clicar no botão "Gerar" e resultado será exibido no campo lateral inferior direito, abaixo do campo onde está o prompt de instruções.

_**Este app foi desenvolvido durante o evento NLW AI da RocketSeat**_.

<br>

## Neste evento, aprendi e coloquei em prática:
- Usar libs para converter video em audio
- Usar a API da openAI para usar a IA para transcrever e criar titulo/descrição através de um prompt pre-definido
- Criar botões com alternância de estados e cores de acordo com o progresso


Após concluir o evento eu comecei a fazer algumas modificações e adicionar alguns recursos extras e customização.
<hr/>

## O que adicionei ao app após finalizar o evento:
- Internacionalização para inglês e português
- Um campo extra para exibir todo o texto da transcrição do audio
- Customização visual (cores, titulo, disposição do menu lateral e campos)

Abaixo um comparativo do app original e com as alterações/adições que realizei:
#### App original no estado inicial:
<img src="https://github.com/prtpj1/prtpj1/blob/main/Apps%20Images/nlwai_01.png?raw=true" alt="imagem do app no estado inicial" />

#### App customizado no estado inicial em inglês:
O estado inicial do app assim que o mesmo é acessado
<img src="https://github.com/prtpj1/prtpj1/blob/main/Apps%20Images/nlwai_02.png?raw=true" alt="imagem do app customizado no estado inicial em inglês" />

#### App customizado no estado inicial em português:
O estado inicial do app assim que o mesmo é acessado e é feita a mudança de lingua clicando no interruptor no canto superior direito da tela
<img src="https://github.com/prtpj1/prtpj1/blob/main/Apps%20Images/nlwai_05.png?raw=true" alt="imagem do app customizado no estado inicial em português" />

#### App customizado no estado final:
O estado final de como o app fica após o video ser selecionado, carregado, convertido e feita a transcrição do audio, transcrição exibida, prompt pre-definido selecionado e o resultado do que a IA gerou (3 opções de títulos ou uma descrição com hashtags)
<img src="https://github.com/prtpj1/prtpj1/blob/main/Apps%20Images/nlwai_03.png?raw=true" alt="imagem do app customizado no estado final em inglês" />

<hr/>

## Tecnologias Utilizadas 
### FrontEnd: 
- HTML
- CSS
- JavaScript
- TypeScript
- React

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/JavaScript2.png?raw=true" width="50" height="50" alt="JavaScript Icon" /></a>
<a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/html2.png?raw=true" width="50" height="50" alt="HTML Icon" /></a>
<a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/CSS2.png?raw=true" width="50" height="50" alt="CSS3 Icon" /></a>
<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/Typescript2.png?raw=true?" width="50" height="50" alt="TypeScript Icon" /></a>
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/React2.png?raw=true" width="50" height="50" alt="React Icon" /></a>
<hr/>

## Como rodar a aplicação?
- Clone o repositório: <br>
`git clone git@github.com:prtpj1/video-titler-ai-web.git`
- Acesse a pasta do projeto: <br>
`cd video-titler-ai-web`
- Instale as dependências: <br>
`pnpm install`

⚠️Antes de iniciar a aplicação, você precisará ter a api funcionando.
Para isso, acesse o [back-end](https://github.com/prtpj1/video-titler-ai-api) e siga as instruções do README para rodar o servidor.

- Agora, com o backend rodando, inicie a aplicação: <br>
`pnpm start` <br>

⚠️Aguarde a aplicação abrir no seu navegador. Caso não ocorra, coloque na barra de endereços do seu navegador: `http://localhost:4173/`
</br>
</br>
_*OBS: Se tiver alguma dificuldade com as instruções e quiser dar um feedback me mande uma mensagem*_