import { CONFIG } from 'src/global-config';

export function buildImageUrl(path?: string) {
  if (!path) return '/assets/no-image.png';

  const cleanServerUrl = CONFIG.serverUrl.replace(/\/+$/, '');
  const cleanPath = path.replace(/^\/+/, '');

  return `${cleanServerUrl}/${encodeURI(cleanPath)}`;
}
