export interface App {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  icon: string;
  appStoreUrl: string | null;
  supportUrl: string;
  privacyUrl: string;
  posters: string[];
  features: string[];
}

export const apps: App[] = [
  {
    name: 'Vortex',
    slug: 'vortex',
    tagline: 'A focused file organizer for your macOS menu bar.',
    description:
      'See new downloads instantly, organize files automatically, act on individual items, and safely undo recent moves.',
    icon: '/brand/vortex-app-icon.png',
    appStoreUrl: null,
    supportUrl: '/support/vortex/',
    privacyUrl: '/privacy/vortex/',
    posters: [
      '/media/vortex/vortex-poster-01-core-value.png',
      '/media/vortex/vortex-poster-02-auto-organize.png',
      '/media/vortex/vortex-poster-03-quick-actions.png',
      '/media/vortex/vortex-poster-04-history-undo.png',
      '/media/vortex/vortex-poster-05-automation.png',
    ],
    features: [
      'Menu bar access',
      'Automatic organization',
      'Quick file actions',
      'Safe undo',
      'Flexible automation',
    ],
  },
];

export function getApp(slug: string): App | undefined {
  return apps.find((a) => a.slug === slug);
}
