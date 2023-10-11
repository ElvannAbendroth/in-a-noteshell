import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'In a Noteshell',
      social: {
        github: 'https://github.com/withastro/starlight',
      },
      sidebar: [
        {
          label: 'Introduction',
          autogenerate: { directory: 'introduction' },
        },
        // {
        //   label: 'Counterpoint',
        //   autogenerate: { directory: 'counterpoint' },
        // },
        {
          label: 'Basic Harmony',
          autogenerate: { directory: 'harmony-1' },
        },
        // {
        //   label: 'Advanced Harmony',
        //   autogenerate: { directory: 'harmony-2' },
        // },
        // {
        //   label: 'References',
        //   autogenerate: { directory: 'reference' },
        // },
      ],
    }),
  ],
})
