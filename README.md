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
// { message: 'message', name: 'name' }

err = error('message')
// { message: 'message', name: 'E_UNKNOWN' }

throw err
// the stacktrace will be as expected, not including the file this error was instantiated in.
```

##### changelog

##### 0.0.1
first commit

#### 0.0.2 - unreleased
...
