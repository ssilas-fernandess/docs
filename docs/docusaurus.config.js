const config = {
  title: 'Documentação',
  tagline: 'Documentação do projeto',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://silasfernandes.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/docs/',

  // GitHub pages deployment config
  organizationName: 'silasfernandes',
  projectName: 'docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/silasfernandes/docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/silasfernandes/docs/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Documentação',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentação',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/silasfernandes/docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentação',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Comunidade',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/silasfernandes/docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Meu Projeto. Built with Docusaurus.`,
    },
  },
};

module.exports = config; 