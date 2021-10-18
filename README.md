## Node JS Starter

### Frameworks to use

* [Express](https://expressjs.com/)
* [Koa](https://koajs.com/)
* [Fastify](https://www.fastify.io/)

### Node
* [Volta](https://volta.sh/)
* [NPM](https://www.npmjs.com/)


### Getting Started
```
curl https://get.volta.sh | bash

volta install node
volta install yarn

git init
yarn init

yarn add fastify --exact
yarn add nodemon --exact --dev
```

### Installing
* `yarn install`

### Running
* `node server.js`
* `npx nodemon server.js`

### Files
* package.json
  This file stores the information about this package and its dependencies
* .gitignore
  This file is needed to ensure certain files do not get sent to github
  i.e. the `node_modules` as they are very large and you can recreate them locally by running `yarn install`
* renovate.json
  This file is used by a github app that automates updating packages
