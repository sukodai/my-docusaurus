import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "マイサウルス",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://sukodai.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/my-docusaurus/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "sukodai", // Usually your GitHub org/user name.
  projectName: "my-docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "ja",
    locales: ["ja"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "マイサウルス",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "チュートリアル",
        },
        {
          type: "docSidebar",
          sidebarId: "usageSidebar",
          position: "left",
          label: "使い方",
        },
        { to: "/blog", label: "ブログ", position: "left" },
        {
          type: "dropdown",
          label: "ワンオフ",
          position: "left",
          items: [
            {
              label: "Facebook",
              href: "https://www.facebook.com",
            },
            {
              type: "doc",
              label: "はじめの一歩",
              docId: "hello", // src/pages/... は指定不可
            },
            {
              type: "doc",
              label: "イントロダクション",
              docId: "intro", // src/pages/... は指定不可
            },
          ],
        },
        {
          href: "https://github.com/facebook/docusaurus",
          label: "GitHub",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "ドキュメント",
          items: [
            {
              label: "チュートリアル",
              to: "/docs/intro",
            },
            {
              label: "使い方",
              to: "/docs/usage",
            },
            {
              label: "ブログ",
              to: "/blog",
            },
          ],
        },
        {
          title: "コミュニティ",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "各種規約",
          items: [
            {
              label: "Terms of Use",
              href: "https://opensource.fb.com/legal/terms/",
            },
            {
              label: "Privacy Policy",
              href: "https://opensource.fb.com/legal/privacy/",
            },
            {
              label: "Cookie Policy",
              href: "https://opensource.fb.com/legal/cookie-policy/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SUKODAI`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    // https://docusaurus.io/docs/api/themes/configuration#color-mode---dark-mode
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
    },
    docs: {
      sidebar: {
        hideable: true, // サイドバーの開閉可能にする
        autoCollapseCategories: true, // 片方を開くと片方が閉じる
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
