import { is } from '@magic/test'

import err, { error } from '../src/index.js'

export default [
  { fn: () => err, expect: is.function, info: 'error is a function' },
  { fn: () => err('message', 'name'), expect: is.error, info: 'error returns an Error' },
  { fn: () => err, expect: is.deep.equal(error), info: 'both error exports match each other' },
]
