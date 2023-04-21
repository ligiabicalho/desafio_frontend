# Desafio Front-end Developer

## Objetivo

Desenvolver uma aplicação front-end utilizando o framework Angular 2+, consumindo a API da Trakto, para realizar a história apresentada.

## Funcionalidades

- Tela de Login: 
  - validação de email e senha.
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

- [Protótipo no Figma](https://www.figma.com/file/Ajzapgkl4vrXw8KnHlIwPh/PrototipoTraktoTV)

## Critérios de aceite

- O visual deve ser idêntico ao protótipo do figma;
- O projeto deve ser dedsenvolvido em Angular 2+;
- As requisições à API devem ser reais, e o candidato deve ter uma conta gratuita na trakto para usar suas credenciais para usar a API;
- O repositório deve está publicado no github e o README deve conter todas as informações necessárias para rodar a aplicação.
- Não precisa ser responsivo.
- Não precisa fazer o deploy.

## Instalação
> Pré-requisitos necessários para executar o projeto

> Rodando testes

## Como usar

## Decisões tomadas e suas motivações

- Tela de login:
> observando a página de cadastro/login da Trakto, optei pelas validações:
  - e-mail válido: user@mail.com
    ** Bug na validação no site: o botão habilita com email@ **
  - senha: mínimo de 6 caracteres
  - Botão Entrar só habilita com validação dos inputs.
  - Loading: 'Entrando...' no botão.



