module.exports = {
    title: 'ShopmakerZ.de - API v1',
    description: 'ShopmakerZ.de API Documentation',
    themeConfig:{
        BearerAuth: 'Mw7M0jUqO3cdJug4YAMTrXwgPqufWgfc',
        currentVersion: '/api/v1/',
        displayAllHeaders: true, // Default: false
        nav: [
            { text: 'API', link: '/api/' },
            { text: 'HELP', link: '/help/' },
        ],
        sidebar: [
            {
                title: 'API Documentation',
                collapsable: false,
                children: [
                    '/api/',
                    '/api/brand'
                ]
            }
        ],
        asidebar: {


            '/api/': [{
                title: 'Api',
                collapsable: false,
                children: [
                    '',
                    '/api/brand',
                ]
            }]

            /*
            {
                title: 'API Documentation',
                collapsable: false,
                children: [
                    '/api/introduction',
                    '/api/guide',
                ]
            },
            {
                title: 'Help',
                collapsable: false,
                children: [
                    '/help/help'
                ]
            },
            */
        }
    }
};