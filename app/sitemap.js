// sitemap.xml 생성 (네이버 서치어드바이저용)
export default function sitemap() {
    const baseUrl = 'https://ommunity.netlify.app';
    const currentDate = new Date().toISOString();

    return [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: 'daily',
            priority: 1.0
        },
        {
            url: `${baseUrl}/suwon-chance`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.9
        },
        {
            url: `${baseUrl}/classics`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8
        },
        {
            url: `${baseUrl}/edge`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8
        },
        {
            url: `${baseUrl}/image-cdn`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8
        },
        {
            url: `${baseUrl}/blobs`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8
        },
        {
            url: `${baseUrl}/middleware`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8
        },
        {
            url: `${baseUrl}/routing`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8
        },
        {
            url: `${baseUrl}/revalidation`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8
        }
    ];
}

