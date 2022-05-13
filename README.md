# EncurtadorDeURL
- [Encurtador de URL 🖥️ 📝](#EncurtadorDeURL-️-)
  - [Requisitos](#requisitos)
  - [Instalação](#instalação)
    - [Estrutura do aplicativo](#estrutura-do-aplicativo)
    - [Com quem devo me preocupar primeiro?](#com-quem-devo-me-preocupar-primeiro)
      - [Instalando o back-end](#instalando-o-back-end)
      - [Instalando o front-end](#instalando-o-front-end)
### Encurtador de URL 🖥️ 📝

Olá! Essa é uma aplicação de encurtamento de URL **EncurtadorDeURL**!

Com ele, você pode criar URLs mais curtas, monitorar número de acessos, deletar suas URLs criadas, além de conhecer as 100 URLs mais acessadas.

Uma verdadeira *mão-na-roda* para criar links mais curtos!

#### Requisitos

- [NodeJS LTS](https://github.com/nodesource/distributions/blob/master/README.md#debinstall) (14 ou mais).
  - O Sistema Operacional [deve suportar o NodeJS](https://github-com.translate.goog/nodejs/build/issues/2168?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt-BR&_x_tr_pto=nui).
- [Vue.JS](https://vuejs.org/) O Vue.JS deve estar instalado.

#### Instalação

Essa é uma aplicação em [NodeJS](https://nodejs.org/pt-br/about/) e [Vue.JS](https://vuejs.org/), que possui **dois componentes principais** (`front` e `back`):
- `Front-end` Essa aplicação consome nossa API e nos retorna as URLs;
- `Back-end` Onde a **mágica** acontece! Nosso back-end utiliza um banco de dados SQL e o ORM Sequelize;

##### Estrutura do aplicativo

```bash
teste-tecnico/
├── README.md # este arquivo
├── teste-backend # responsável por processar nossos dados através de requisições
│   ├── package.json # principal componente da aplicação
│   ├── package-lock.json # arquivo responsável por otimizar a instalação em outros ambientes
│   ├── app.js # inicia a aplicação
│   ├── index.js # ouve a porta configurada
│   ├── .env # variáveis de ambiente 
│   └── src
│       ├── config
│       │   ├── config.js
│       ├── controllers.js
│       │   ├── orderController.js
│       │   ├── userController.js
│       ├── services
│       │   ├── orderService.js
│       │   └── userService.js
│       ├── models
│       │   ├── buyers.js
│       │   ├── cnpjs.js
│       │   ├── index.js
│       │   ├── orders.js
│       │   ├── providers.js
│       │   └── users.js
│       ├── routers
│       └── └── orders.js
├── teste-frontend # responsável por ser uma interface amigável para nosso back-end
│   ├── package.json # principal componente da aplicação
│   ├── package-lock.json # arquivo responsável por otimizar a instalação em outros ambientes
│   ├── babel.config.js
│   ├── jsconfig.json
│   ├── vue.config.js
│   ├── README.md
│   ├── public
│   │   ├── favicon.png
│   │   ├── index.html
│   └── src
│       ├── App.vue
│       ├── main.js
│       ├── components
│       │   ├── MyInvoices.vue
│       │   └── MySideBar.vue
│       ├── helpers
│       │   └── fetchOrders.js
│       ├── pages
│       │   └── MyInvoicesPage.vue
│       ├── store
│       │   ├── modules
│       │   │   └── orders.js
│       │   ├── actions.js
│       │   ├── mutations.js
│       │   └── index.js

```

##### Com quem devo me preocupar primeiro?

- Como o `back-end` é o coração 💚 dessa aplicação, é possível utilizar ele sem um `Front-end`, nesse caso, é possível consumi-lo através de requisições REST, através de seu aplicativo de requisições favorito, como Postman, Insomnia, HTTPie, etc!
  - É recomendável roda-lo primeiro para garantir que o front-end tem da onde conseguir as informações de tarefas!

- O `front-end`, por outro lado, dá uma cara mais elegante 🌟 para nosso app, e é preferencialmente recomendado para consumo do nosso back-end!
  - É recomendável deixa-lo por segundo, já que ainda que o `front` funcione, ele precisa de uma API para consumir - papel do nosso back-end.

###### Instalando o back-end

- Acesse a pasta `./teste-tecnico/teste-backend`;
- Instalar a aplicação utilizando o comando `npm install`;
- O processo não deve retornar erros. `Warns` *(Avisos)* não impedem seu funcionamento;
- Rodar a aplicação com `npm start`;
-  Esse aplicativo requer, **excepcionalmente**, um arquivo `.env`, que deve ser inserido na raiz do projeto (`./teste-tecnico/teste-backend`); 
    - Neste arquivo deve-se ser inserido as seguintes variáveis de uma banco de dados SQL:
        -  HOSTNAME='nome do Host'
           DB_USER='user de acesso ao banco'
           DB_PASSWORD='insira o password de acesso ao banco'
           DB_DATABASE=cashforce_v3 //exemplo - nome do schema
           PORT=3000 //exemplo - porta que a aplicação backend irá rodar

###### Instalando o front-end

- Acesse a pasta `./teste-tecnico/teste-frontend`;
- Instalar a aplicação utilizando o comando `npm install`;
- O processo não deve retornar erros. `Warns` *(Avisos)* não impedem seu funcionamento;
- Rodar a aplicação com `npm run serve`;
- Por padrão, essa aplicação funciona a partir da porta `8080`;
