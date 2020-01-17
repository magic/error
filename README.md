# @magic/error

throw errors with custom code/name.

[html-docs](https://magic.github.io/error)

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

[npm-image]: https://img.shields.io/npm/v/@magic/error.svg
[npm-url]: https://www.npmjs.com/package/@magic/error
[travis-image]: https://img.shields.io/travis/com/magic/error/master
[travis-url]: https://travis-ci.com/magic/error
[appveyor-image]: https://img.shields.io/appveyor/ci/magic/error/master.svg
[appveyor-url]: https://ci.appveyor.com/project/magic/error/branch/master
[coveralls-image]: https://coveralls.io/repos/github/magic/error/badge.svg
[coveralls-url]: https://coveralls.io/github/magic/error
[greenkeeper-image]: https://badges.greenkeeper.io/magic/error.svg
[greenkeeper-url]: https://badges.greenkeeper.io/magic/error.svg
[snyk-image]: https://snyk.io/test/github/magic/error/badge.svg
[snyk-url]: https://snyk.io/test/github/magic/error

#### installation:
```javascript
npm install @magic/error
```

##### usage:
```javascript
import error from '@magic/error'

err = error('message', 'name')
// Error { message: 'message', name: 'E_NAME', code: 'E_NAME' }

err = error('message')
// Error { message: 'message', name: 'E_UNKNOWN', code: 'E_UNKNOWN' }

err = error(new Error('message'))
// Error { message: 'message', name: 'Error', code: 'E_UNKNOWN' }

err = error('message', 'name with spaces')
// Error { message: 'message', name: 'name with spaces', code: 'E_NAME_WITH_SPACES' }

throw err
// the stacktrace will be as expected,
// not including the file in this lib that this error was instantiated in.
```

##### changelog

##### 0.0.1
first commit

#### 0.0.2
* errors can be passed as first argument
* error.name is unchanged, error.code gets transformed to start with E_ and be uppercased.
* error.code for passed in errors is E_UNKNOWN.

#### 0.0.3
* error name (second fn argument) can now be a string with spaces.
e.code is e.name, but UPPER_SNAKE_CASED.

#### 0.0.4 - unreleased
...
