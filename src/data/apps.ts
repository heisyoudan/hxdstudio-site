export interface AppFeature {
  title: string;
  description: string;
  tags: string[];
  poster: string;
}

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
  featureDetails: AppFeature[];
}

export const apps: App[] = [
  {
    name: 'Vortex',
    slug: 'vortex',
    tagline: 'A focused file organizer for your macOS menu bar.',
    description:
      'See new downloads instantly, organize files automatically, act on individual items, and safely undo recent moves.',
    icon: '/brand/vortex-app-icon.png',
    // Use the App Store ID link which redirects per region
    appStoreUrl: 'https://apps.apple.com/app/id6772141575',
    supportUrl: 'https://heisyoudan.github.io/hxdstudio-site/support/vortex/',
    privacyUrl: 'https://heisyoudan.github.io/hxdstudio-site/privacy/vortex/',
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
    featureDetails: [
      {
        title: 'Goodbye, download clutter.',
        description:
          'See and organize new downloads instantly from your menu bar.',
        tags: ['Menu bar access', 'Auto organize', 'Safe undo'],
        poster: '/media/vortex/vortex-poster-01-core-value.png',
      },
      {
        title: 'From messy downloads to organized folders.',
        description:
          'Vortex automatically sorts new files into clear folders by type.',
        tags: ['Auto sorting', 'Clear structure'],
        poster: '/media/vortex/vortex-poster-02-auto-organize.png',
      },
      {
        title: 'Handle downloads right away.',
        description:
          'Open, drag, archive, or delete new files without opening the Downloads folder.',
        tags: ['Open or drag', 'Archive or delete'],
        poster: '/media/vortex/vortex-poster-03-quick-actions.png',
      },
      {
        title: 'A clear timeline. Safe undo.',
        description:
          'Review organized files and undo recent moves with one click.',
        tags: ['Archive history', 'One-click undo'],
        poster: '/media/vortex/vortex-poster-04-history-undo.png',
      },
      {
        title: 'Automation, on your terms.',
        description:
          "Choose when files are organized, where they're saved, and how each rule is applied.",
        tags: ['Flexible timing', 'Clear rule order'],
        poster: '/media/vortex/vortex-poster-05-automation.png',
      },
    ],
  },
];

export function getApp(slug: string): App | undefined {
  return apps.find((a) => a.slug === slug);
}
