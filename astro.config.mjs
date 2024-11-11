import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'In a Noteshell',
      customCss: ['./src/styles/global.css'],
      social: {
        github: 'https://github.com/withastro/starlight',
      },
      editLink: {
        baseUrl: 'https://github.com/ElvannAbendroth/in-a-noteshell/tree/master/',
      },
      sidebar: [
        {
          label: 'Welcome',
          link: 'welcome',
        },
        {
          label: 'Music Theory',
          autogenerate: {
            directory: 'music-theory',
          },
        },
        {
          label: 'Four-Part Harmony',
          autogenerate: {
            directory: 'four-part-harmony',
          },
        },
        {
          label: 'References',
          collapsed: true,
          autogenerate: {
            directory: 'references',
          },
        },
      ],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
})
