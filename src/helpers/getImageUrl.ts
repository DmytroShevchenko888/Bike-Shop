export function getImageUrl(page: string, url: string) {
  return new URL(`../images/${page}/${url}`, import.meta.url).href;
}
