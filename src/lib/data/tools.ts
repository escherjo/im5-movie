export type Tool = {
  id: string;
  title: string;
  url: string;
  description: string;
};

export const tools = [
  {
    id: '1',
    title: 'Svelte',
    url: 'https://svelte.dev/',
    description: 'A radical new approach to building user interfaces.'
  },
  {
    id: '2',
    title: 'SvelteKit',
    url: 'https://kit.svelte.dev/',
    description: 'The fastest way to build Svelte apps.'
  },
  {
    id: '3',
    title: 'Blender',
    url: 'https://www.blender.org/',
    description: 'Free and open source 3D creation software.'
  },
  {
    id: '4',
    title: 'GIMP',
    url: 'https://www.gimp.org/',
    description: 'Free and open source image editor.'
  },
  {
    id: '5',
    title: 'Inkscape',
    url: 'https://inkscape.org/',
    description: 'Free and open source vector graphics editor.'
  },
  {
    id: '6',
    title: 'Krita',
    url: 'https://krita.org/',
    description: 'Free and open source painting program.'
  }
];
