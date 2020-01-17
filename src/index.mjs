export const error = (err, name = 'Unknown', type = 'E') => {
  if (err instanceof Error) {
    name = err.code || err.name
  } else {
    err = new Error(err)

    err.stack = err.stack
      .split('\n')
      .filter(c => !c.includes('/error/src/index.mjs'))
      .join('\n')
  }

  err.code = name
  err.name = name
  err.type = type

  if (!err.code.startsWith(type)) {
    err.code = `${type}_${err.code}`.toUpperCase().replace(/ /g, '_')
  }

  if (err.name === 'Error') {
    err.code = 'E_UNKNOWN'
  }

  const nameRegExp = new RegExp(`${err.name}:?`, 'g')
  const codeRegExp = new RegExp(`${err.code}:?`, 'g')

  // clean stack
  // remove name and message
  err.stack = err.stack
    .replace(nameRegExp, '')
    .replace(codeRegExp, '')
    .split('\n')
    .map(t => t.trim())
    .join('\n')

  return err
}

export default error
