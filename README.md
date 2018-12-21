# vaken-ui
React GUI component of the vaken next-gen hacker registration system

## Dev

Made with Typescript

```
npm i -g tsc # install TypeScript globally
npm i # install deps
npm start # start server no autoreload
npm run dev # start server w/ autoreload
npm run lint # lint
npm run lint-fix # lints, and autofixes for some rules
```

## Folder Structure

This project is laid out grouped by features and or routes (as per [this faq](https://reactjs.org/docs/faq-structure.html))

## Tooling

* [babel](https://nodemon.io/) - transpiling, tree-shaking, code splitting
* [webpack](https://github.com/webpack/webpack) - bundling is _so_ 2018
* [typescript](https://github.com/Microsoft/TypeScript) - it's like ES2017 but better
* [tslint](https://www.npmjs.com/package/tslint) + [tslint-config-airbnb](https://www.npmjs.com/package/tslint-config-airbnb) - instead of `eslint` - linting
* [prettier](https://www.npmjs.com/package/prettier) + [tslint-prettier](https://www.npmjs.com/package/tslint-config-prettier) - code formatting, see [philosophy](https://alexjover.com/blog/use-prettier-with-tslint-and-be-happy/)
* [husky](https://github.com/typicode/husky) - precommit hooks + prepush hooks (see `package.json`)

## Dependencies

* [react](https://github.com/facebook/react) - the best front-end framework available in 2018
* [immer](https://github.com/mweststrate/immer) - (type-safe) immutable data structures in javascript. ImmutableJS having stringly typed paths? Not for us. 