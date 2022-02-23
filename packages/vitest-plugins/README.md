# vitest-plugins

[![npm](https://img.shields.io/npm/v/vitest-plugins.svg)](https://www.npmjs.com/package/vitest-plugins)
[![npm](https://img.shields.io/npm/dt/vitest-plugins.svg)](https://www.npmjs.com/package/vitest-plugins)
[![npm](https://img.shields.io/npm/l/vitest-plugins.svg)](https://github.com/negativetwelve/vitest-plugins/blob/master/LICENSE)

Adds plugins support to Vitest.

Derived off of the excellent [jest-plugins](https://github.com/negativetwelve/jest-plugins)

## Getting Started

Install `vitest-plugins` using `yarn`:

```shell
yarn add --dev vitest-plugins
```

## Usage

This aids in registering globals when configured in vitest. If globals is not set to true, then this process does
nothing.

In order to utilize `vitest-plugins` in your project, you must configure the setup to add your custom plugins.
If `vitest-plugins` ever is merged into `vitest`, then this will be simpler, until then, follow the instructions below.

First, find your `test` config in your `vite.config.js`. Add a key `setupFiles` and point it to another file at the
top-level called `vitest-plugins.js`.

```javascript
{
  test: {
    globals: true,
    setupFiles: [
      'vitest-plugins.js'
    ]
  }
}
```

Inside `vitest-plugins.js`, write the following:

```javascript
require('vitest-plugins')([
  // List all vitest-plugins here.
  'vitest-plugin-context',
  'vitest-plugin-set',
]);
```

This is requiring each of the plugins and including it automatically in your project.

Once installed, run `vitest` to run your tests and plugins should be accessible in your test files.
