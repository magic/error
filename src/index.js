import is from '@magic/types'

/**
 * @typedef {Error & { code?: string, type: string, msg: string }} CustomError
 */

/**
 * @param {string | Error | [string, string?, string?]} err
 * @param {string} [name='Unknown']
 * @param {string} [type='E']
 * @returns {CustomError}
 */
export const error = (err, name = 'Unknown', type = 'E') => {
  /** @type {CustomError} */
  let e

  if (is.array(err)) {
    name = err[1] || name
    type = err[2] || type

    e = /** @type {CustomError} */ (new Error(err[0]))
  } else if (err instanceof Error) {
    e = /** @type {CustomError} */ (err)

    if (name === 'Unknown' && is.string(e.name)) {
      name = e.name
    }
  } else {
    e = /** @type {CustomError} */ (new Error(err))
  }

  if (!is.string(name)) {
    name = 'Unknown'
  }

  e.code = name
  e.name = name
  e.type = type
  e.msg = e.message

  if (!e.code.startsWith(type)) {
    e.code = `${type}_${e.code}`.toUpperCase().replace(/ /g, '_')
  }

  if (e.name === 'Error') {
    e.code = 'E_UNKNOWN'
  }

  const nameRegExp = new RegExp(`${e.name}:? `, 'g')
  const msgRegExp = new RegExp(`${e.message}:? `, 'g')

  // clean stack
  if (e.stack) {
    e.stack = e.stack
      .split('\n')
      .filter(c => !c.includes('/error/src/index.js'))
      .join('\n')
      .replace(nameRegExp, '')
      .replace(msgRegExp, '')
      .replace('Error:', '')
      .split('\n')
      .map(t => t.trim())
      .join('\n')
  }

  return e
}

export default error
