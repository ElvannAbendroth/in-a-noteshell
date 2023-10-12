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
        {
          label: 'Basic Music Theory',
          autogenerate: { directory: 'basic-theory' },
        },
        // {
        //   label: 'Counterpoint',
        //   autogenerate: { directory: 'counterpoint' },
        // },
        {
          label: 'Basic Harmony',
          // autogenerate: { directory: 'harmony-1' },
          items: [
            {
              label: '1. Introduction to Harmony',
              autogenerate: { directory: 'basic-harmony/chapter-01' },
            },
            {
              label: '2. Composing in Minor Keys',
              autogenerate: { directory: 'basic-harmony/chapter-02' },
            },
            {
              label: '3. Harmonizing a Melody',
              autogenerate: { directory: 'basic-harmony/chapter-03' },
            },
          ],
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
