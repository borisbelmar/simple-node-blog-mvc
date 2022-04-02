# Example MVC project with Express and Handlebars

This project is a base example for MVC pattern with Express and Handlebars. For dependencies installation you can use:

```
npm install
```

For run the project in production, you can use:

```
npm start
```

For development environment, you can use:

```
npm run dev
```

For linting you can use:

```
npm run lint
npm run lint:fix
```

How to use this project
---

### Folders

This projects follow the MVC pattern, you can see four main folders at src:

**controllers**: Controllers are the main logic of the application. This controllers will be called by the routes.

**models**: Models are the main data access of the application. This models will be called by the controllers. This folder contains entities, DAOs or repositories.

**views**: This views will be called by the controllers. This folder contains the handlebars templates for server side rendering HTML.

**public**: This folder contains the static files for the application.

### Files

We have three files on the src folder:

**routes.js**: This file is the main routes file. It will be used to configure the routes and his controllers.

**index.js**: This file is the entry point of the application. It will be mount the server.

**app.js**: This file is the main application file. It will be used to configure the express application.	

### Linter rules

This project uses standard linter rules. You can see the rules on [eslint-config-standard](https://www.npmjs.com/package/eslint-config-standard).

![eslint-config-standard](https://camo.githubusercontent.com/ff3e730c1c3401d5a6628d17368fa46e566da747c2b85de971e228c44426dbee/68747470733a2f2f63646e2e7261776769742e636f6d2f7374616e646172642f7374616e646172642f6d61737465722f62616467652e737667)