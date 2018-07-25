const { title, shortTitle } = require('./meta')

module.exports = {
	siteMetadata: {
		title,
		siteUrl: `https://www.escaladesports.com`,
	},
	plugins: [
		'gatsby-plugin-esca-css',
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-remove-trailing-slashes`,
		{
			resolve: `gatsby-plugin-favicon`,
			options: {
				logo: `./src/img/icon.png`,
				injectHTML: true,
				icons: {
					android: false,
					appleIcon: false,
					appleStartup: false,
					coast: false,
					favicons: true,
					firefox: false,
					twitter: false,
					yandex: false,
					windows: false
				}
			}
		},
		{
			resolve: `gatsby-plugin-web-font-loader`,
			options: {
				google: {
					families: [
						`Oswald`,
						`Open Sans`,
					]
				}
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/pages`,
				name: `pages`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					`gatsby-remark-prismjs`,
					`gatsby-remark-copy-linked-files`,
					`gatsby-remark-smartypants`,
					{
						resolve: `gatsby-remark-external-links`,
						options: {
							target: `_blank`,
						}
					},
				],
			},
		},
		`gatsby-plugin-markdown-pages`,
		`gatsby-plugin-polyfill-io`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: title,
				short_name: shortTitle,
				start_url: `/`,
				background_color: `#fff`,
				theme_color: `#52b8fc`,
				display: `minimal-ui`,
				icon: `src/img/icon.png`
			},
		},
		`gatsby-plugin-offline`,
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-netlify`,
		`gatsby-plugin-netlify-identity-widget`,
		{
			resolve: `gatsby-plugin-netlify-cms`,
			options: {
				modulePath: `${__dirname}/src/components/cms.js`,
			},
		},
		`gatsby-plugin-netlify-cache`,
		{
			resolve: `gatsby-plugin-html-attributes`,
			options: {
				lang: `en`,
			},
		},
	],
}
