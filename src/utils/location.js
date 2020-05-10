export const isRootPath = location => {
  const { pathname } = location
  const acceptablePaths = [`${__PATH_PREFIX__}/`, `${__PATH_PREFIX__}/es`]
  return acceptablePaths.indexOf(pathname) >= 0
}

export const getLanguage = location => {
  const { pathname } = location
  return pathname.startsWith(`${__PATH_PREFIX__}/es`) ? "es" : "en"
}

export const getRootPath = language => {
  return language === "en" ? "/" : `/${language}`
}
