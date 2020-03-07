# IKMLAB.github.io

NCKU IKMLAB's Official Website.

## Environment setup

We use [nvm](https://github.com/nvm-sh/nvm) to setup virtual environment for Node.js.
Make sure you use environment compatible to the following settings:

- [nvm](https://github.com/nvm-sh/nvm) version: `0.35.1`
- [node](https://nodejs.org/en/) version: `12.13.1`
- [npm](https://www.npmjs.com/) version: `6.14.1`

We provide a quite snippet for you to setup the environment

```sh
# (required only for the first time)
# clone the repo
git clone https://github.com/IKMLab/IKMLab.github.io.git

# go to the project directory
cd IKMLab.github.io

# (optional if you already did this before)
# setup nvm for bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash

# (optional if you already did this before)
# install node, which come with a default npm version
nvm install v12.13.1

# (optional if you already did this before)
# update npm
npm install npm@6.14.1

# (required only for the first time)
# install dependencies
npm install
```

## Production build

```sh
# Use the following snippet to build
# production version of the website.
npm run build

# Shortcut command.
npm run b
```

## Development build

```sh
# Use the following snippet to build
# development version of the website.
npm run development

# Shortcut command.
npm run d

# Use the following snippet to run
# a development server.
# This should automatically open a browser
# for you, with hot module replacement and
# live reload utilities.
# If the browser did not open, then go to
# the following url:
# https://localhost:3000/home.html
npm start
```

## TODO

- Remove `dist` from `.gitignore` once we finish create the website
- Add RWD
- Add test
  - for `package.json`
    - `directories.test`
    - `script.test`
