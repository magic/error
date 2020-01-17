export const View = state => [
  h1(state.title),
  p(state.description),

  GitBadges('magic/log'),

  h2({ id: 'getting-started' }, 'getting started'),
  p('be in a nodejs project.'),

  h3({ id: 'install' }, 'install'),
  Pre('npm i --save @magic/error'),

  h3({ id: 'import' }, 'import'),
  Pre("import log from '@magic/log'"),

  h2({ id: 'usage' }, 'usage'),
  Pre(`
import error from '@magic/error'

err = error('message', 'name')
// Error { message: 'message', name: 'E_NAME', code: 'E_NAME', type: 'E' }

err = error('message')
// Error { message: 'message', name: 'E_UNKNOWN', code: 'E_UNKNOWN', type: 'E' }

err = error(new Error('message'))
// Error { message: 'message', name: 'Error', code: 'E_UNKNOWN', type: 'E' }

err = error('message', 'name with spaces')
// Error {
//  message: 'message',
//  name: 'name with spaces',
//  code: 'E_NAME_WITH_SPACES',
//  type: 'E'
// }
`),

  h2({ id: 'error-types' }, 'error types'),
  p('errors can have types'),

  Pre(`
// E is the default type
err = error('message', 'name')
// Error { message: 'message', name: 'name', code: 'E_NAME', type: 'E' }

// warnings:
err = error('message', 'name', 'W')
// Error { message: 'message', name: 'name', code: 'W_NAME', type: 'W' }

// debug:
err = error('message', 'name', 'D')
// Error { message: 'message', name: 'name', code: 'D_NAME', type: 'D' }
`),

  h2({ id: 'source' }, 'source'),
  p([
    'the source for this page is in the ',
    Link({ to: 'https://github.com/magic/log/tree/master/example' }, 'example directory'),
    ' and gets built and published to github using ',
    Link({ to: 'https://github.com/magic/core' }, '@magic/core'),
  ]),
]
