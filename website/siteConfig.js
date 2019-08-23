/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'Lorem Ipsum for Adobe XD',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/users/lorem-ipsum.png',
    infoLink: 'https://xdplugins.pabloklaschka.de/plugins/lorem-ipsum',
    pinned: true,
  },
  {
    caption: 'Text Toolbox for Adobe XD',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/users/text-toolbox.png',
    infoLink: 'https://xdplugins.pabloklaschka.de/plugins/text-toolbox',
    pinned: true,
  },
  {
    caption: 'Markdown for Adobe XD',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/users/markdown.png',
    infoLink: 'https://xdplugins.pabloklaschka.de/plugins/markdown',
    pinned: true,
  },
  {
    caption: 'Tunda Image',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/users/tunda-image.png',
    infoLink: 'https://github.com/satriaajiputra/tunda-image',
    pinned: true,
  },
];

const siteConfig = {
  title: 'xd-dialog-helper', // Title for your website.
  tagline: 'Create dialogs in plugins for Adobe XD CC with ease',
  url: 'https://xd-dialog-helper.pabloklaschka.de', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'xd-dialog-helper',
  organizationName: 'pklaschka',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'installation', label: 'Docs'},
    {href: '/editor', label: 'WYSIWYG-Editor', external: true},
    {href: 'https://github.com/pklaschka/xd-dialog-helper', label: 'GitHub', external: true}
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/logo.png',
  footerIcon: 'img/logo.png',
  favicon: 'img/logo.png',

  /* Colors for website */
  colors: {
    primaryColor: '#2D4E64',
    secondaryColor: '#E0D9D5',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Pablo Klaschka`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
		themeUrl: 'css/highlight.css'
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/pklaschka/xd-dialog-helper',
};

module.exports = siteConfig;
