import { useEffect } from 'react';
import faviconUrl from '../../assets/armz-logo.png';

export function Favicon() {
  useEffect(() => {
    // Update favicon
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = faviconUrl;
    document.head.appendChild(link);

    // Update document title
    document.title = 'ARMZ GLOBAL - Creating a Safer Society';

    // Add meta description
    const metaDescription = document.querySelector("meta[name='description']") || document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'ARMZ GLOBAL provides unparalleled security solutions from traditional manned guards to cutting-edge AI-powered systems. Police and military expertise you can trust.';
    document.head.appendChild(metaDescription);
  }, []);

  return null;
}
