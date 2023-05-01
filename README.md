# :art: Desafio Front-end Developer Trakto.

## Sumário

- [Contexto](#contexto)
- [Funcionalidades](#funcionalidades)
- [Demonstração](#demonstração)
- [Critérios de Aceite](#critérios-de-aceite)
- [Instalação](#instalação)
  - [Pré-requisitos](#pré-requisitos)
  - [Rodando locamente](#rodando-localmente)
- [Como Usar](#como-usar)
- [Desafios, decisões e motivações](#desafios-decisões-tomadas-e-suas-motivações)
- [Desenvolvedora](#desenvolvedora)

## Contexto

Esse desafio é parte do processo seletivo para vaga de pessoa Desenvolvedora Front-end na Trakto.
O objetivo é desenvolver uma aplicação front-end utilizando o framework Angular 2+, consumindo a API da Trakto, para realizar a [história apresentada](https://github.com/trakto/desafio_frontend).

## Funcionalidades

- Tela de Login:
  - validação de email e senha.
  - autenticação do usuário.
- Tela inicial, apresenta os módulos da Trakto Tv:
  - Material didático;
  - Quiz;
  - Desenho;
  - Youtube;
- Tela Material didático (obrigatória):
  - Consumo da API da Trakto:
    - Listar 10 designs editados recentemente.
  - Ao clicar na miniatura ou nome do design, acessa apresentação do editor em nova aba.
  - Opção de listar todos os materiais.
- Tela Desenho (opcional):

  - Lousa.

<p align="right"><a href="#art-desafio-front-end-developer-trakto">(De volta ao topo)</a></p>

## Demonstração

> Fornecido pela empresa

- [Protótipo no Figma](https://www.figma.com/file/Ajzapgkl4vrXw8KnHlIwPh/PrototipoTraktoTV)

## Critérios de aceite

- O visual deve ser idêntico ao protótipo do figma;
- O projeto deve ser dedsenvolvido em Angular 2+;
- As requisições à API devem ser reais, e o candidato deve ter uma conta gratuita na trakto para usar suas credenciais para usar a API;
- O repositório deve está publicado no github e o README deve conter todas as informações necessárias para rodar a aplicação.
- Não precisa ser responsivo.
- Não precisa fazer o deploy.

## Instalação

### Pré-requisitos

É necessário ter instalado:

- [Angular-CLI](https://angular.io/cli)
- [Node.js](https://nodejs.org/en)
- [NPM Package manager](https://docs.npmjs.com/cli/v9/commands/npm-install)

Para mais detalhes das versões mais atuais, consulte o guia de configuração do [Angular](https://angular.io/guide/setup-local).

### Rodando localmente

- Faça um clone do projeto  
  `git clone git@github.com:ligiabicalho/desafio_frontend.git`

- Entre no diretório clonado `desafio_frontend` e instale as dependências:

  `cd desafio_frontend
  `npm install`

- Inicie o servidor  
  _A opção --open (ou apenas -o) abre automaticamente seu navegador para http://localhost:4200/_.  
  `ng serve --open`

<p align="right"><a href="#art-desafio-front-end-developer-trakto">(De volta ao topo)</a></p>

## Como usar

Para acessar a aplicação é necessário ter um cadastro gratuito na [Trakto.io](https://www.trakto.io/).
Para melhor experiência, você pode fazer uso dos dados abaixo, que já possui arquivos salvos que serão renderizados na aplicação:

- Usuário experimental:

```
  {
    email: acervolcb@gmail.com
    password: Tkt123
  }
```

## Desafios, decisões tomadas e suas motivações

Essa é minha primeira aplicação utilizando Angular 2+.  
Minha experiência é baseada em React.js e TypeScript apenas com Node.js. Com esse repertório e a motivação de aprimorar minhas habilidades, encarei o desafio de estudar o Angular e desenvolver a aplicação dentro do prazo de 7 dias que foi estipulado, adotando ao máximo as boas práticas e funcionalidades específicas do fremework.

Ainda que após o prazo do processo seletivo, pretendo adicionar as funcionalidades opcionais, inclusive do Quiz, tornando a aplicação mais completa e interativa.  
Atuei no ramo de educação por 8 anos, utilizando inclusive diferentes plataformas de ensino remoto (como a Plurall e Tutor Mundi) e aliar essa temática com a tecnologia é algo que me entusiasma.

- Tela de login:

  > observando a página de cadastro/login da Trakto, optei pelas validações:

  - e-mail válido: user@mail.com
  - senha: mínimo de 6 caracteres
  - Botão Entrar só habilita com validação dos inputs.

- Material Didático:

  - Exibição de documentos editados:  
    o meu usuário não estava salvando na plataforma os designs que editei. Assim, não os recebia via API. Desse modo, optei por adicionar diversos tampletes sem fazer quaisquer alterações, pois somente assim eles ficavam disponíveis para uso na aplicação.
  - É possível integrar a API do Youtube para exibir vídeos da empresa, no entanto é necessário autenticação da mesma.

- Desenho (Lousa):  
  Como não encontrei o recurso disponível via API da Trakto, procurei implementar um recurso externo que atendesse essa demana, pensando que será de uso livre para uma aula online, não para criação de artes.

- Quiz:  
  Integração com uma aplicação desenvolvida por mim no final do ano passado, com consumo da API pública do Trivi e utilizando React. Farei a adequação da estilização para manter a unidade com a marca.

Agradeço ao Jorge da Trakto, cujo contato estava vinculado ao repositório da API, que gentilmente deu pronto retorno à minha dúvida em relação ao uso da mesma.

## Desenvolvedora

<a href="https://github.com/ligiabicalho">
  <img src="https://avatars.githubusercontent.com/u/108960742" width="100px" alt="Ligia Bicalho"/>
  <a href="https://linkedin.com/in/ligiabicalho" target="_blank">
  <p>:information_source: Lígia Bicalho</p>
</a>

<p align="right"><a href="#art-desafio-front-end-developer-trakto">(De volta ao topo)</a></p>
