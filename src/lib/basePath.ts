export const basePath =
  process.env.NODE_ENV === 'production' ? '/bevium-landingpage' : ''

export function publicPath(path: string) {
  return `${basePath}${path.startsWith('/') ? path : `/${path}`}`
}