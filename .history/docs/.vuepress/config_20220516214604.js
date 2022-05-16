module.exports = {
    title: 'TypeScript4 文档',
    description: 'TypeScript4 最新官方文档翻译',
    base: '/blog/',
    theme: 'reco',
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    themeConfig: {
        subSidebar: 'auto'
    },
    themeConfig: {
        nav: [{
                text: '首页',
                link: '/'
            },
            {
                text: 'monstereat 博客',
                items: [{
                        text: 'Github',
                        link: 'https://github.com/monstereat'
                    },
                    {
                        text: '掘金',
                        link: 'https://juejin.cn/user/3227821867543838'
                    }
                ]
            }
        ],
        sidebar: [{
                title: '欢迎学习',
                path: '/',
                collapsable: false, // 不折叠
                children: [{
                    title: "学前必读",
                    path: "/"
                }]
            },
            {
                title: "基础学习",
                path: '/handbook/ConditionalTypes',
                collapsable: false, // 不折叠
                children: [{
                        title: "条件类型",
                        path: "/handbook/ConditionalTypes"
                    },
                    {
                        title: "泛型",
                        path: "/handbook/Generics"
                    }
                ],
            }
        ]
    }
}