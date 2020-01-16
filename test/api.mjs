import { is, fs, tryCatch } from '@magic/test'

import error from '../src/index.mjs'

const testError = new Error('message')

export default [
  { fn: error('message', 'E_CUSTOM').name, expect: 'E_CUSTOM', info: 'error.name can be set' },
  { fn: error('message').message, expect: 'message', info: 'error.message can be set' },
  { fn: error('message').name, expect: 'E_UNKNOWN', info: 'default name is E_UNKNOWN' },
  { fn: error('message').code, expect: 'E_UNKNOWN', info: 'default name is E_UNKNOWN' },

  { fn: error(new Error('message')).name, expect: 'Error', info: 'error default name is Error' },
  { fn: error(new Error('message')).code, expect: 'Error', info: 'error default name is Error' },
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
]
