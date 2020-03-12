# IKMLAB.github.io

NCKU IKMLAB's Official Website.

## Table of Content

- [Environment setup](#environment-setup)
- [Production build](#production-build)
- [Deployment](#deployment)
- [Development build](#development-build)
- [FAQ](#faq)
  - [Need to update website information](#need-to-update-website-information)
  - [Add functionality to website](#add-functionality-to-website)
- [To Do](#to-do)
- [License](#license)

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

## Deployment

```sh
# We use nginx to host our webiste. Get help from manager
# if you don't know where to deploy. (`ssh` to server first,
# do `git pull` from GitHub repo, then run the following snippet.)
npm run deploy
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

## FAQ

### Need to update website information

- You should send an email to us, with **title 'Update website information'** and **content** following the format:

```txt
identification:
  (optional) If you claim some content on website may
  related to or owned by you, then please also send
  reference which can help us to prove your identity.
page:
  http://ikmlab.csie.ncku.edu.tw/which-page.html
content:
  The problematic image or text on the website.
description:
  Describe the problem.
```

- If you are a **current member of our lab**, then ask the lab's **network manager** for help.

### Add functionality to website

- You can **fork** our repo and issue a **pull request**. The branch name must begin with `feature-`.
  - For example: `feature-deep-learning`
- If you are a **current member of our lab**, then ask the lab's **network manager** to add you as a **collaborator**.
- If you are an **alumnus**, send an mail to us with **title 'Feature request'** and **content** following the format in [this section](#need-to-update-website-information).

## To Do

- Add test
  - for `package.json`
    - `directories.test`
    - `script.test`
- Write documents for all files in `src`

## License

MIT
