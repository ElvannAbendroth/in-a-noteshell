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
          label: 'Start Here!',
          autogenerate: { directory: 'start-here' },
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
              label: 'Learn',
              autogenerate: { directory: 'four-part-harmony/learn' },
            },
            {
              label: 'Chapter 1: Fundamentals',
              autogenerate: { directory: 'four-part-harmony/01-fundamentals' },
            },
            {
              label: 'Chapter 2: Minor Keys',
              autogenerate: { directory: 'four-part-harmony/02-fundamentals' },
            },
            {
              label: 'Chapter 3: Harmonization',
              autogenerate: { directory: 'four-part-harmony/03-harmonization' },
            },
            // {
            //   label: '2. Writing in Minor',
            //   autogenerate: { directory: 'four-part-harmony/chapter-02' },
            // },
            // {
            //   label: '3. Tonality & Harmonization',
            //   autogenerate: { directory: 'four-part-harmony/chapter-03' },
            // },
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
