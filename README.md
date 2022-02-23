# Vitest Plugins

Adds plugin feature to vitest for easily adding extensions.

Derived off of the excellent [jest-plugins](https://github.com/negativetwelve/jest-plugins)

## Getting Started

## Packages

The Vitest Plugins repo is managed as a monorepo that is composed of many npm packages.

### Core Packages

| Plugin                                       | Version                                                                | Description                           |
|----------------------------------------------|------------------------------------------------------------------------|---------------------------------------|
| [`vitest-plugins`](/packages/vitest-plugins) | [![npm](https://img.shields.io/npm/v/vitest-plugins.svg)][npm-plugins] | Adds the `plugins` feature to vitest. |

[npm-plugins]: https://www.npmjs.com/package/vitest-plugins

### Plugins

| Plugin                                                     | Version                                                                       | Description                                                             |
|------------------------------------------------------------|-------------------------------------------------------------------------------|-------------------------------------------------------------------------|
| [`vitest-plugin-context`](/packages/vitest-plugin-context) | [![npm](https://img.shields.io/npm/v/vitest-plugin-context.svg)][npm-context] | Adds `context` as an alternative to `describe` for vitest.              |
| [`vitest-plugin-set`](/packages/vitest-plugin-set)         | [![npm](https://img.shields.io/npm/v/vitest-plugin-set.svg)][npm-set]         | Declaratively `set` your variables lazily. Implements `let` from RSpec. |

[npm-context]: https://www.npmjs.com/package/vitest-plugin-context
[npm-set]: https://www.npmjs.com/package/vitest-plugin-set
