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
        //   label: 'Fundamentals',
        //   autogenerate: { directory: 'fundamentals' },
        // },
        // {
        //   label: 'Counterpoint',
        //   autogenerate: { directory: 'counterpoint' },
        // },
        {
          label: 'Four-Part Harmony',
          // autogenerate: { directory: 'harmony-1' },
          items: [
            {
              label: '1. Introduction',
              autogenerate: { directory: 'four-part-harmony/chapter-01' },
            },
            {
              label: '2. Writing in Minor',
              autogenerate: { directory: 'four-part-harmony/chapter-02' },
            },
            {
              label: '3. Tonality & Harmonization',
              autogenerate: { directory: 'four-part-harmony/chapter-03' },
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
