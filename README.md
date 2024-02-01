# express-with-netlify-demo

## Overview

This is a sample of express.js. Which is deploy with netlify.

### Project structure

- PROJECT_NAME (folder)

  - functions (Store function files)

    - FUN_NAME.ts(js) (Function file)

  - routes

  - views

  - netlify.toml (Setup netlify deploy)

  - package.json (Specify used package)

## How to start

### Create project

1. Create a project

    ```sh
    express PROJECT_NAME --view=pug
    ```

    - `--view=pug`: Set render engine to pug

2. Install project dependency

    ```sh
    npm i express serverless-http @netlify/functions @types/express
    ```

    - If your Express project uses JavaScript, you can exclude `@netlify/functions` and `@types/express`.

### Netlify setup

#### Functions

1. Create a folder called "functions" in the root dir.

2. Create a Netlify Function file for either TypeScript or JavaScript. For example, you might create a function file called `api.ts`.

3. Inside the function, write the function that will import Express and create a router object to handle routing. (Could refer to app.js)

#### Netlify.toml

1. Create a file `netlify.toml`

- In the redirects section is a rewrite that enables Express to parse the URLs configured in your function file. In this example, Express can now successfully parse /api, which we configured above with api.use('/api/', router);.

- If you don’t wish to add the rewrite, you might have to change the configuration in your function to specify the functions path, such as api.use('/.netlify/functions/', router);.

## Ref link

<https://docs.netlify.com/integrations/frameworks/express/#deploy-an-express-app-on-netlify>
