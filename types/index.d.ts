export function error(
  err: string | Error | [string, string?, string?],
  name?: string,
  type?: string,
): CustomError
export default error
export type CustomError = Error & {
  code?: string
  type: string
  msg: string
}
