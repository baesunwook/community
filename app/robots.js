// robots.txt 생성 (네이버 검색봇 Yeti 포함 모든 봇 허용)
export default function robots() {
    return {
        rules: [
            {
                userAgent: '*', // 모든 검색 로봇
                allow: '/', // 전체 사이트 허용
                disallow: [] // 차단할 경로 없음
            },
            {
                userAgent: 'Yeti', // 네이버 검색봇
                allow: '/'
            }
        ],
        sitemap: 'https://ommunity.netlify.app/sitemap.xml',
        host: 'https://ommunity.netlify.app'
    };
}

