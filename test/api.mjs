import { is, fs, tryCatch } from '@magic/test'

import error from '../src/index.mjs'

const testError = new Error('message')

const namedErrNative = new Error('msg')
namedErrNative.name = 'error name'

const namedError = error(namedErrNative)

const namedErrStackedNative = new Error('msg')
namedErrStackedNative.name = 'error name'
namedErrStackedNative.stack = namedErrStackedNative.stack.replace(/:/g, '')

const namedErrorStacked = error(namedErrStackedNative)

const noNameErrorNative = new Error('msg')
noNameErrorNative.name = 23

const noNameError = error(noNameErrorNative)

export default [
  { fn: error('message', 'E_CUSTOM').name, expect: 'E_CUSTOM', info: 'error.name can be set' },
  { fn: error('message').message, expect: 'message', info: 'error.message can be set' },
  { fn: error('message').name, expect: 'Unknown', info: 'default name is Unknown' },
  { fn: error('message').code, expect: 'E_UNKNOWN', info: 'default name is E_UNKNOWN' },
  {
    fn: error('message', 'error space', 'E').name,
    expect: 'error space',
    info: 'type of E gets prepended to err.code',
  },

  {
    fn: error('message', 'error', 'E').name,
    expect: 'error',
    info: 'type = E: name stays unchanged',
  },
  {
    fn: error('message', 'error', 'E').code,
    expect: 'E_ERROR',
    info: 'type = E: gets prepended to err.code',
  },

  {
    fn: error('message', 'warn', 'W').name,
    expect: 'warn',
    info: 'type = W: name stays unchanged',
  },
  {
    fn: error('message', 'warn', 'W').code,
    expect: 'W_WARN',
    info: 'type = W: gets prepended to err.code',
  },

  {
    fn: error('message', 'debug', 'D').name,
    expect: 'debug',
    info: 'type = D: name stays unchanged',
  },
  {
    fn: error('message', 'debug', 'D').code,
    expect: 'D_DEBUG',
    info: 'type = D: gets prepended to err.code',
  },

  {
    fn: error(new Error('message')).name,
    expect: 'Error',
    info: 'default name (2nd fn arg) is Error',
  },
  {
    fn: error(new Error('message')).code,
    expect: 'E_UNKNOWN',
    info: 'error default code is E_UNKNOWN',
  },
  {
    fn: error(new Error('message')).message,
    expect: 'message',
    info: 'error.message is set if error is passed',
  },

  {
    fn: tryCatch(fs.mkdirp, ''),
    expect: t => t.name === 'E_ARG_EMPTY',
    info: 'fs.mkdirp error gets returned as expected',
  },

  {
    fn: namedError.name,
    expect: 'error name',
    info: 'err.name for namedError matches.',
  },
  {
    fn: namedError.code,
    expect: 'E_ERROR_NAME',
    info: 'err.code for namedError matches.',
  },
  {
    fn: namedError.stack,
    expect: t => !t.includes('error name'),
    info: 'err.stack: err.name gets removed, with trailing :',
  },

  {
    fn: namedErrorStacked.name,
    expect: 'error name',
    info: 'err.name for namedErrorStacked matches.',
  },
  {
    fn: namedErrorStacked.code,
    expect: 'E_ERROR_NAME',
    info: 'err.code for namedErrorStacked matches.',
  },
  {
    fn: namedErrorStacked.stack,
    expect: t => !t.includes('E_ERROR_NAME'),
    info: 'err.stack: err.code gets removed, without trailing :',
  },

  {
    fn: noNameError.name,
    expect: 'Unknown',
    info: 'err.name gets set to Unknown if passed Error.name is not a string',
  },

  {
    fn: noNameError.code,
    expect: 'E_UNKNOWN',
    info: 'err.code gets set to E_UNKNOWN if passed Error.name is not a string',
  },

  {
    fn: error('msg', 23).name,
    expect: 'Unknown',
    info: 'err.name: gets set to Unknown if name (2nd fn arg) is not a string',
  },

  {
    fn: error('msg', 23).code,
    expect: 'E_UNKNOWN',
    info: 'err.code: gets set to E_UNKNOWN if name (2nd fn arg) is not a string',
  },
]
