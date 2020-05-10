export const isRootPath = location => {
  const { pathname } = location
  const acceptablePaths = [`${__PATH_PREFIX__}/`, `${__PATH_PREFIX__}/es`]
  return acceptablePaths.indexOf(pathname) >= 0
}
