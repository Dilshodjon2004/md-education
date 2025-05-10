import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-essentials',
		'@storybook/addon-onboarding',
		'@chromatic-com/storybook',
		'@storybook/experimental-addon-test',
	],
	framework: {
		name: '@storybook/nextjs',
		options: {},
	},
	staticDirs: ['..\\public'],
	webpackFinal: async config => {
		const fileLoaderRule = config.module?.rules?.find(
			rule => rule.test && rule.test.test('.svg')
		)
		fileLoaderRule.exclude = /\.svg$/

		config.module?.rules?.push({
			test: /\.svg$/,
			enforce: 'pre',
			loader: require.resolve('@svgr/webpack'),
			// use: [
			// 	{ loader: '@svgr/webpack' },
			// 	{
			// 		loader: 'file-loader',
			// 		options: { name: 'static/[path][name].[ext]' },
			// 	},
			// ],
			// type: 'javascript/auto',
		})

		return config
	},
}
export default config
