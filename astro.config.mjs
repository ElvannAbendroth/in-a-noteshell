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
          label: 'Fundamentals',
          autogenerate: { directory: 'fundamentals' },
        },
        // {
        //   label: 'Counterpoint',
        //   autogenerate: { directory: 'counterpoint' },
        // },
        {
          label: 'Four-Part Harmony',
          // autogenerate: { directory: 'harmony-1' },
          items: [
            {
              label: 'Introduction',
              autogenerate: { directory: 'four-part-harmony/introduction' },
            },
            {
              label: 'Writing in Minor',
              autogenerate: { directory: 'four-part-harmony/minor' },
            },
            {
              label: 'Tonality & Harmonization',
              autogenerate: { directory: 'four-part-harmony/harmonizing-melodies' },
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
