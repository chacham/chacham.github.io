interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://chacham.github.io/',
	author: 'Chacham',
	title: 'Chacham\'s Blog',
	description: '이것저것',
	lang: 'ko-KR',
	ogLocale: 'ko_KR',
	shareMessage: 'Share this post',
	paginationSize: 6
}
