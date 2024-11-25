export const themeData = JSON.parse("{\"title\":\"Cream薄荷糖\",\"description\":\"Cream薄荷糖的云文档\",\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"Cream薄荷糖的云文档\",\"children\":[{\"text\":\"Halo\",\"link\":\"/使用 Docker 部署Halo\"},{\"text\":\"知乎\",\"link\":\"/\"},{\"text\":\"掘金\",\"link\":\"/\"}]}],\"sidebar\":[{\"text\":\"前言\",\"collapsible\":false,\"children\":[{\"text\":\"内容介绍\"},{\"text\":\"使用指南\"}]},{\"text\":\"算法学习\",\"link\":\"/Algorithm/Divide&Conquer\",\"collapsible\":false,\"children\":[{\"text\":\"分治法\",\"link\":\"/Algorithm/Divide&Conquer\"}]}],\"themeConfig\":{\"search\":false,\"searchMaxSuggestions\":10},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
