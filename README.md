<p align="center">
  <img width="250" src="https://user-images.githubusercontent.com/40436472/99880817-81862980-2bf4-11eb-9153-f129decb0a68.png" alt="DevoluTI Challenge" />
</p>

Nesse desafio, você deverá desenvolver uma aplicação web para controle de fornecedores e produtos. 

O desafio foi criado utilizando React e Typescript.

1. Faça o clone do repositório `git clone https://github.com/devoluti/devolutichallenge-front` e crie as funcionalidades necessárias.
2. Use o layout especificado nesse documento.
3. Você deverá estilizar sem auxilio de bibliotecas UI (como bootstrap, material ui e outros). 
4. A estilização deverá ser feita usando CSS puro ou CSS-in-JS.
5. Organize seu código, incluindo componentes, estruturas de dados e gerenciamento de estado da maneira que você faria em um projeto real.
6. Na dúvida sobre alguma coisa, tome uma decisão e siga em frente. Se você precisar alterar qualquer código já escrito, faça-o.
7. No final, devemos ser capazes de executar `npm start` e executar a aplicação com sucesso, ou então documente qualquer nova forma de executar o aplicativo. 

**OBSERVAÇÃO**: ao executar `npm start`, você receberá um erro. Portanto, você precisa corrigi-lo para continuar.

## Requisitos

- A aplicação deve ser capaz de listar todos os fornecedores;
- Na listagem de fornecedor, deve ter o total de produtos cadastrados para ele.
- A aplicação deve ser capaz de listar todos os produtos;
- A aplicação deve ser capaz de filtrar os produtos por fornecedor;
- A aplicação deve ser capaz de criar um novo fornecedor e adiciona-lo a tabela.
- A aplicação deve ser capaz de criar um novo produto, vincular a um fornecedor e adicionar o produto criado na tabela.
- A aplicação deve ser capaz de navegar entre as telas de fornecedores e produtos.

## Requisitos adicionais (opcional)

- Os elementos das tabelas devem ser ordenados em ordem alfabética.
- Você poderá adicionar uma validação na criação do produto para que a categoria do produto seja a mesma do fornecedor informado.

## Informações importantes

Para que você tenha os dados para exibir em tela, criamos um arquivo que você poderá utilizar como fake API para prover esses dados.

Para isso, deixamos instalado no seu package.json uma dependência chamada `json-server`, e um arquivo chamado `server.json` que contém os dados para as rotas `/providers` e `/products`. Para executar esse servidor você pode executar o seguinte comando: 

`yarn server`ou `npm run server`

## Layout

O layout foi criado utilizando a ferramenta **Figma**, você poderá acessar ela usando o navegador ou, se preferir fazendo o download no próprio site da ferramenta.

Para acessar o layout clique no link abaixo. 

[Teste Técnico DevoluTI](https://www.figma.com/file/mmAAkOh8JXvUAbfPZ4Galb/Teste-T%C3%A9cnico-DevoluTI?node-id=0%3A1)

## Entrega

Para enviar o seu projeto, adicione-o a um repositorio no seu github e nos envie o link no e-mail [devoluti.solutions@gmail.com](mailto:devoluti.solutions@gmail.com). Outra alternativa (mas **não** preferível), você poderá enviar por e-mail um tar/zip, porém sem o diretório node_modules / ou .git. O desafio deverá ser entregue até as 23:59 do dia 25/11/2020.

Boa sorte! 😉
