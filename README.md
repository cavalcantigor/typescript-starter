*Original repo: https://github.com/stemmlerjs/simple-typescript-starter*

### Features
- Minimal
- TypeScript v4
- Testing with Jest
- Linting with Eslint and Prettier
- Pre-commit hooks with Husky
- VS Code debugger scripts
- Local development with Nodemon
- Commit lint to guarantee commits convention

### Scripts

#### `npm run start:dev`
Starts the application in development using nodemon and ts-node to do hot reloading.

#### `npm run start`
Starts the app in production by first building the project with npm run build, and then executing the compiled JavaScript at build/index.js.

#### `npm run build`
Builds the app at build, cleaning the folder first.

#### `npm run test`
Runs the jest tests.

#### `npm run coverage`
Runs the jest coverage report.

#### `npm run prettier-format`
Format your code.

### More configs

- **ESLint**: https://eslint.org/docs/rules/
- **Prettier**: https://prettier.io/docs/en/options.html
- **Commit lint**: https://commitlint.js.org/
