export function strToId(str) {
  return btoa(str).replaceAll('=', '').replaceAll('/', '-').replaceAll('+', '-')
}
