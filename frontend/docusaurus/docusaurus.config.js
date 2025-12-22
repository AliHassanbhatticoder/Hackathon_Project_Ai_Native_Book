// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const prismThemes = require('prism-react-renderer').themes;

/** @type {import('@docusaurus/types').Config} */
const config = {
  // --- 1. Site Metadata (Branding) ---
  title: 'AI Native Dev',
  tagline: 'Spec-Driven Reusable Intelligence',
  favicon: 'img/favicon.ico',

  // -------------------------------------------------------------------------
  // DEPLOYMENT CONFIG (UPDATED FOR YOUR NEW ACCOUNT)
  // -------------------------------------------------------------------------
  
  // Aapka Domain (GitHub Pages url)
  url: 'https://AliHassanbhatticoder.github.io', 
  
  // Aapka Repo Name (Slash start aur end mein zaroori hai)
  baseUrl: '/Hackathon_Project_Ai_Native_Book/',

  // GitHub User & Repo Info
  organizationName: 'AliHassanbhatticoder', // Aapka Naya Username
  projectName: 'Hackathon_Project_Ai_Native_Book', // Aapka Repo Name
  
  deploymentBranch: 'gh-pages', // Woh branch jo website display karegi
  trailingSlash: false, // GitHub Pages ke liye best practice

  // -------------------------------------------------------------------------

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Internationalization
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: undefined, 
        },
        blog: {
          showReadingTime: true,
          editUrl: undefined,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      
      // --- 2. Navbar Configuration ---
      navbar: {
        title: 'AI Native Dev', 
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Read Book',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/AliHassanbhatticoder/Hackathon_Project_Ai_Native_Book',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      // --- 3. Footer Configuration ---
      footer: {
        style: 'light',
        links: [
          {
            title: 'Learn',
            items: [
              { label: 'Introduction', to: '/docs/introduction' },
            ],
          },
          {
            title: 'Community',
            items: [
              { label: 'GitHub', href: 'https://github.com/AliHassanbhatticoder' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AI Native Software Development. Built with Spec-Kit.`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

module.exports = config;

