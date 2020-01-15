import { is } from '@magic/test'

import err from '../src/index.mjs'

const testError = new Error('message')

export default [
  { fn: err('message', 'E_CUSTOM').name, expect: 'E_CUSTOM', info: 'error.name can be set' },
  { fn: err('message').message, expect: 'message', info: 'error.message can be set' },
  { fn: err('message').name, expect: 'E_UNKNOWN', info: 'default name is E_UNKNOWN' },
]
