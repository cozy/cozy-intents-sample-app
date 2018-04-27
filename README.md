# Cozy Intents example application

This application aims to demonstrate how to work with intents on a minimal stack, just ES2018 and no external libraries.

The application must be built and install into a [Cozy Stack server](https://github.com/cozy/cozy-stack) along side a [Cozy Drive](https://github.com/cozy/cozy-drive) application which will resolve the intents.

An text input is displayed so you can trigger intents. Intents' results will be display in the DOM.

## Development

Grab dependencies and watch code changes:

```
yarn
yarn watch
```

Use a [Cozy Stack server](https://github.com/cozy/cozy-stack) with [Cozy Drive](https://github.com/cozy/cozy-drive) to serve this application:

```
cozy-stack serve --appdir intents-dev:../cozy-intents-sample-app/dist
```

⁉️ for an unknown reason, the first time you type a character in the text field, nothing happens, you have to type a second time.

‼️ be sure to have files in [Cozy Drive](https://github.com/cozy/cozy-drive)
