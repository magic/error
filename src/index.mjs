export const error = (err, name = 'E_UNKNOWN') => {
  if (err instanceof Error) {
    name = err.code || err.name
    err.code = name
    err.name = name
  } else {
    err = new Error(err)
    err.name = name
    err.code = name
  }

  // clean stack
  // remove name, message, and !first and second! line of stack (if they include this file)
  err.stack = err.stack
    .replace(`${err.name}:`, '')
    .replace(`${err.code}:`, '')
    .split('\n')
    .filter((c, i) => (i <= 1 ? c.includes('/error/src/index.mjs') : false))
    .join('\n')

  return err
}

export default error
