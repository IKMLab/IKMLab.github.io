# Documentation

All files and scripts' logic must be included in this directory.

## Structure

- `src`
  - `src/component` is where you put your React components.
  - `src/redux` is where you put your Redux reducers.
  - `src/route` is where you put all your website pages.
  - `src/style` is where you put your React components' style.
  - `src/template` is where you put all your html templates.

## Golden Rules

### Do's

- Put **ALL** your code into `src` folder
  - If it is a `*.jsx` file, it must be in one of the following folders: `src/component`, `src/redux` or `src/route`.
  - If it is a `*.module.scss` file, it must be in `src/style` folder.

### Don'ts

- **DO NOT** alter the following files unless you know what you are doing: `config/*`, `.gitignore`, `LICENSE`, `package*.json`.
  - If you really need to change something, make sure you talk to the maintainer first.
