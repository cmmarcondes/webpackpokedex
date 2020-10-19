<h1 align="center">WebpackPokedex</h1>

<p align="center">we used <a href="pokeapi.co" target="_blank">pokeapi.co</a> to get all data of pokemons and display it as you search or as you roll between pages</p>
<h1 align="center">
    <a href="https://pt-br.reactjs.org/" target="_blank">🔗REACT</a>
</h1>

<p align="center">
 <a href="#Quick-install">Quick install</a> •
 <a href="#Usage">Usage</a> • 
 <a href="#Features">Features</a> • 
 <a href="#Demo">Demo</a> • 
 <a href="#Tecnologias">Tecnologias</a> • 
 <a href="#Considerações">Considerações</a> • 
 <a href="#Licença">Licença</a>
</p>




### Quick-install

Before we start, be sure you have installed Node and Git on your pc, if you havent, you can download node by clicking <a href="https://nodejs.org/en/" target="_blank">here</a> and Git clicking <a href="https://git-scm.com" target="_blank">here</a>.
<i>quick note: would be great if you have <a href="https://code.visualstudio.com/" target="_blank">VsCode</a> installed too, its a great tool that will help you a lot</i>

🎲 First thing: open your command-line and navigate to the folder you wanna clone the repo

<b>Cloning the repo</b>
<i>$ git clone https://github.com/carlosmagnofcamara/webpackpokedex.git</i>

<i>$ cd webpackpokedex</i>

🎲 The second thing we should do is to install all node dependencies.

<b>Installing all dependencies</b>:
<i>$ npm install</i>

<b>then you start the application:</b>
<i>$ npm run dev</i>

<i>quick note: your app will run at localhost:8080</i>



# Usage


## we give you two options of searching:

### first of them: name or id - here you just need to write the name or the id of a pokemon you wanna search, for example you can just type "1" without the quotation marks

### second is the ability of any pokemon - you just need to type the id of the ability you wanna search

### if you click in any pokemon box you will get all his details too :)

<i>note: we use debounce on our input and use 1000 ms delay. You just need to type the pokemon you want and then wait 1 sec for the debounce works and get you your pokemon</i> <a href="https://www.npmjs.com/package/lodash.debounce" target="_blank">More details here</a>




### Features

- [x] Pesquisa com id
- [x] Pesquisa com nome
- [x] Pesquisa por habilidade
- [x] Página com os detalhes dos pokemons
- [x] Página que lista todos os pokemons



### Demo

We deployed the app at Heroku, and you can access by clicking -> <a href="https://webpackpokedex.herokuapp.com/" target="_blank">https://webpackpokedex.herokuapp.com/ </a>



### Tecnologias

- [Webpack](https://webpack.js.org/)
- [Reactjs](https://pt-br.reactjs.org/)
- [Node.js](https://nodejs.org/en/)



### Considerações

Primeiro de tudo, essa era uma ideia onde seria utilizado a lib create-react-app, porém a ideia evoluiu e acabou se tornando uma pokedex que utiliza a tecnologia do webpack.
Tenho a filosofia de que se estamos confortáveis com alguma desafio, significa que você já não pode mais evoluir. Eu gosto de me colocar em situações desafiadoras e desconfortáveis, pois só assim o conhecimento é absorvido e só assim poderemos evoluir.

Porque utilizar o webpack?
 -Era uma tecnologia totalmente desconhecida para mim e por conta de eu sempre utilizar o create-react-app, não conhecia os conceitos do react por baixo dos panos, então decidi ir um pouco mais a fundo nesse projeto e aproveitar a oportunidade para estudar esse funcionamento.

Qual foi o maior desafio?
 -Com toda certeza o maior desafio foi o "torque". O momento em que você tem que partir do zero e refatorar totalmente o mindset.

Qual o maior aprendizado?
 -Aprendizado tecnico sem sombra de dúvidas foi como funciona o react por baixo dos panos e o aprendizado que levo dessa experiencia desse projeto é que a leitura é a nossa maior aliada na hora de aprender um novo conceito.

Agradeço a você que leu até aqui, essa parte das considerações está sendo feita exatamente 01:43 da manhã, se houver algum erro de português eu peço desculpas anteciparamente, porém eu quis separar uma parte do readme onde pudesse dizer algumas palavras de incentivo, provavelmente vai ser legal ler isso futuramente e pensar o quanto eu evoluí, o quanto eu mudei e o quanto essa filosofia me ajudou. Espero que gostem da Pokedex



### Licença

MIT License

Copyright (c) <2020> <Carlos Magno>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Hope you have some fun, thankyouuuu