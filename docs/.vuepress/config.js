import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
 
export default defineUserConfig({
    bundler: viteBundler(),
    theme: defaultTheme({
		title: 'Cream薄荷糖',
		description: 'Cream薄荷糖的云文档',
        // 在这里进行配置
        navbar: [
            // NavbarItem

            { text: '首页', link: '/', },
            // NavbarGroup
            {
                text: 'Cream薄荷糖的云文档',
                children: [
                    { text: 'Halo', link: '/使用 Docker 部署Halo' },
                    { text: '知乎', link: '/' },
                    { text: '掘金', link: '/' },
                ],
            },
        ],
        sidebar: [
            {
                text: '前言',
                collapsible: false,
                children: [
                    { text: '内容介绍' },
                    { text: '使用指南' }
                ]
            },
            {
                text: '算法学习',
                link: '/Algorithm/Divide&Conquer',
                collapsible: false,
                children: [
                    { text: '分治法', link: '/Algorithm/Divide&Conquer' }
                ],
            }
        ],
		themeConfig: {
			search: false,
			searchMaxSuggestions: 10
		}
    }),
})
