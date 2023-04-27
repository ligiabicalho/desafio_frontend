# Desafio Front-end Developer - Trakto

## Sumário

- [Contecto](#contexto)
- [Funcionalidade](#funcionalidades)
- [Demonstração](#demonstração)
- [Critérios de Aceite](#critérios-de-aceite)
- [Instalação](#instalação)  
  -[Pré-requisitos](#pré-requisitos)  
  -[Rodando locamente](#rodando-localmente)
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

- Entre no diretório `trakto_tv` e instale as dependências:

  `cd desafio_frontend/trakto_tv`  
  `npm install`

- Inicie o servidor  
  _A opção --open (ou apenas -o) abre automaticamente seu navegador para http://localhost:4200/_.  
  `ng serve --open`

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

O prazo final para entrega do desafio é quinta-feira, 27 de abril, 23h59.

- Tela de login:
  > observando a página de cadastro/login da Trakto, optei pelas validações:
  - e-mail válido: user@mail.com
  - senha: mínimo de 6 caracteres
  - Botão Entrar só habilita com validação dos inputs.

## Desenvolvedora

<a href="https://github.com/ligiabicalho">
  <img src="https://avatars.githubusercontent.com/u/108960742" width="100px" alt="Ligia Bicalho"/>
  <a href="https://linkedin.com/in/ligiabicalho" target="_blank">
  <p>:information_source: Lígia Bicalho</p>
</a>

<p align="right"><a href="#desafio-front-end-developer">(De volta ao topo)</a></p>
