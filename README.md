# @invisible/basic-tests

> Basic tests for your project: requiring each file and testing environment variables

## Installation

```bash
yarn add --dev @invisible/basic-tests
```

## Usage

### Programmatically

This module exposes two methods `checkRequireAllFiles` and `checkEnvFromSample`.

1. `checkRequireAllFiles()` will attempt to require every file in your project, aside from those that are ignored by your `.gitignore` or are in your `test` directory. If it encounters any that throw an error on require, or are simply invalid javascript, this function will throw. If it encounters multiple such errors, it will throw one error at the end with all un-requirable files listed.

This test is useful because it ensures that you don't have any obvious errors in your files. It should also encourage you to not have any side effects on requiring files.

2. `checkEnvFromSample()` checks that all env vars in `env.sample` are actually set in your environment. This is useful so that you won't try to run your package when it is missing a required environment variable.

Note: both of these methods are synchronous.

To use these methods, create a [test file](test/specs/index.spec.js) and call these functions

```javascript

// test/index.js

'use strict'

const {
  checkEnvFromSample,
  checkRequireAllFiles,
} = require('@invisible/basic-tests')

describe('env', () => {
  it('env.sample should exist, and all env vars should be set', checkEnvFromSample)
})

describe('dependencies', () => {
  it('should be able to require all files', checkRequireAllFiles)
})

```

```bash
$ mocha test

  ․․

  2 passing (20ms)
```

### CLI

For convenience, we also expose these two methods for the CLI as `check-env-from-sample` and `check-require-all-files` so you can call them from your CI as part of your checks before deploying, or you can add them to the lifecycle script itself so that even after deploy you can get immediate feedback (and your server won't start).

For example:

```json
// package.json:
{
  "prestart": "check-env-from-sample && check-require-all-files",
  "start": "node index.js"
  ...
}
```

Note: `check-env-from-sample` requires `dotenv` before checking.
