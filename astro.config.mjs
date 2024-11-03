import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'In a Noteshell',
      customCss: [
        // Relative path to your custom CSS file
        './src/styles/global.css',
      ],
      social: {
        github: 'https://github.com/withastro/starlight',
      },
      editLink: {
        baseUrl: 'https://github.com/ElvannAbendroth/in-a-noteshell/tree/master/',
      },
      sidebar: [
        {
          label: 'Start Here!',
          autogenerate: {
            directory: 'start-here',
          },
        },
        {
          label: 'Four-Part Harmony',
          autogenerate: {
            directory: 'four-part-harmony',
          },
        },
        {
          label: 'Other Resources',
          autogenerate: {
            directory: 'others',
          },
        },
      ],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
})
