import { CONFIG } from 'src/global-config';

export function buildImageUrl(path?: string) {
  if (!path) return '/assets/no-image.png';

  const encodedPath = encodeURI(path);

  return `${CONFIG.serverUrl}${encodedPath}`;
}
