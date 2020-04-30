const title = "Mush Love";
const description = "Join the mushroom community";
const author = "Marcoucou";
const ogprefix = 'og: http://ogp.me/ns#';
const color = '#011627';

module.exports = {
    title,
    themeConfig: {
        search: false,
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Cultivation', link: '/cultivation/' },
            { text: 'Blog', link: '/blog/' },
            { text: 'Resources', link: '/resources/' },
            { text: 'About', link: '/about/' }
        ]
    },
    head: [
        ['link', { rel: 'icon', href: `/favicon.png` }],
        ['meta', { name: 'theme-color', content: color }],
        ['meta', { prefix: ogprefix, property: 'og:title', content: title }],
        ['meta', { prefix: ogprefix, property: 'twitter:title', content: title }],
        ['meta', { prefix: ogprefix, property: 'og:type', content: 'article' }],
        ['meta', { prefix: ogprefix, property: 'og:url', content: 'https://mushcommunity.org' }],
        ['meta', { prefix: ogprefix, property: 'og:description', content: description }],
        ['meta', { prefix: ogprefix, property: 'og:image', content: 'https://mushcommunity.org/favicon.png' }],
        ['meta', { prefix: ogprefix, property: 'og:article:author', content: author }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ]
    // locales: {
    //     '/': {
    //         // text for the language dropdown
    //         selectText: 'Languages',
    //         // label for this locale in the language dropdown
    //         label: 'English',
    //         // Aria Label for locale in the dropdown
    //         ariaLabel: 'Languages',
    //         // text for the edit-on-github link
    //         editLinkText: 'Edit this page on GitHub',
    //         // config for Service Worker
    //         serviceWorker: {
    //             updatePopup: {
    //                 message: "New content is available.",
    //                 buttonText: "Refresh"
    //             }
    //         },
    //         nav: [
    //             { text: 'Home', link: '/' },
    //             { text: 'Cultivation', link: '/cultivation/' },
    //             { text: 'Blog', link: '/blog/' },
    //             { text: 'Resources', link: '/resources/' },
    //             { text: 'About', link: '/about/' }
    //         ]
    //     },
    //     '/fr/': {
    //         selectText: '选择语言',
    //         label: '简体中文',
    //         editLinkText: '在 GitHub 上编辑此页',
    //         serviceWorker: {
    //             updatePopup: {
    //                 message: "发现新内容可用.",
    //                 buttonText: "刷新"
    //             }
    //         },
    //         nav: [
    //             { text: 'Home', link: '/fr' },
    //             { text: 'Cultivation', link: '/fr/cultivation/' },
    //             { text: 'Blog', link: '/fr/blog/' },
    //             { text: 'Resources', link: '/fr/resources/' },
    //             { text: 'About', link: '/fr/about/' }
    //         ],
    //     }
    // }

}