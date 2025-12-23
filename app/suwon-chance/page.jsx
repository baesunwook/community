import Image from 'next/image';

// SEO 메타데이터 - 제목과 설명을 직접 작성해주세요
export const metadata = {
    title: '', // 여기에 페이지 제목을 입력하세요 (예: "수원 찬스 - 최고의 서비스")
    description: '', // 여기에 페이지 설명을 입력하세요 (검색결과에 표시됨)
    keywords: '', // 여기에 키워드를 입력하세요 (쉼표로 구분)
    openGraph: {
        title: '', // 여기에 SNS 공유용 제목을 입력하세요
        description: '', // 여기에 SNS 공유용 설명을 입력하세요
        images: ['/images/main-thumb.jpg'],
        type: 'website'
    },
    robots: {
        index: true,
        follow: true
    }
};

export default function SuwonChancePage() {
    return (
        <main className="min-h-screen bg-white">
            {/* 상단 썸네일 이미지 - 화면 전체 너비 */}
            <section className="w-full relative h-[400px] md:h-[600px]">
                <Image
                    src="/images/main-thumb.jpg"
                    alt="" // 여기에 이미지 설명을 입력하세요
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
            </section>

            {/* 전화 걸기 버튼 - 크고 눈에 띄게 */}
            <section className="w-full bg-gradient-to-r from-blue-600 to-blue-700 py-6 sticky top-0 z-10 shadow-lg">
                <div className="container mx-auto px-4">
                    <a
                        href="tel:01093541323"
                        className="block w-full max-w-md mx-auto bg-white text-blue-600 text-center py-4 px-6 rounded-full font-bold text-xl md:text-2xl shadow-xl hover:bg-blue-50 transition-all duration-300 hover:scale-105"
                    >
                        📞 010-9354-1323
                    </a>
                </div>
            </section>

            {/* 메인 컨텐츠 영역 */}
            <article className="container mx-auto px-4 py-12 max-w-4xl">
                {/* 메인 제목 (H1) - SEO에 가장 중요 */}
                <header className="mb-8">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                        {/* 여기에 메인 제목을 입력하세요 */}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                        {/* 여기에 부제목이나 요약 설명을 입력하세요 */}
                    </p>
                </header>

                {/* 첫 번째 섹션 */}
                <section className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        {/* 여기에 첫 번째 섹션 제목을 입력하세요 */}
                    </h2>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                        {/* 여기에 본문 내용을 입력하세요 */}
                    </p>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        {/* 여기에 추가 본문 내용을 입력하세요 */}
                    </p>
                </section>

                {/* 이미지 갤러리 */}
                <section className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                        {/* 여기에 갤러리 섹션 제목을 입력하세요 */}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* 이미지 1 */}
                        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <Image
                                src="/images/model1.jpg"
                                alt="" // 여기에 이미지 설명을 입력하세요
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>

                        {/* 이미지 2 */}
                        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <Image
                                src="/images/model2.jpg"
                                alt="" // 여기에 이미지 설명을 입력하세요
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>

                        {/* 이미지 3 */}
                        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <Image
                                src="/images/model3.jpg"
                                alt="" // 여기에 이미지 설명을 입력하세요
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>
                    </div>
                </section>

                {/* 두 번째 섹션 */}
                <section className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        {/* 여기에 두 번째 섹션 제목을 입력하세요 */}
                    </h2>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                        {/* 여기에 본문 내용을 입력하세요 */}
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li className="text-base md:text-lg">{/* 여기에 리스트 항목 1을 입력하세요 */}</li>
                        <li className="text-base md:text-lg">{/* 여기에 리스트 항목 2를 입력하세요 */}</li>
                        <li className="text-base md:text-lg">{/* 여기에 리스트 항목 3을 입력하세요 */}</li>
                    </ul>
                </section>

                {/* 세 번째 섹션 */}
                <section className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        {/* 여기에 세 번째 섹션 제목을 입력하세요 */}
                    </h2>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        {/* 여기에 본문 내용을 입력하세요 */}
                    </p>
                </section>

                {/* CTA (Call To Action) 섹션 */}
                <section className="bg-blue-50 rounded-2xl p-8 md:p-12 text-center">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                        {/* 여기에 행동 유도 문구를 입력하세요 */}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 mb-6">{/* 여기에 부가 설명을 입력하세요 */}</p>
                    <a
                        href="tel:01093541323"
                        className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg md:text-xl shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105"
                    >
                        📞 지금 바로 전화하기
                    </a>
                </section>
            </article>

            {/* 푸터 */}
            <footer className="bg-gray-900 text-white py-8 mt-16">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-sm md:text-base">
                        {/* 여기에 푸터 내용을 입력하세요 (예: 사업자 정보, 주소 등) */}
                    </p>
                    <p className="text-sm md:text-base mt-2">
                        📞 상담문의:{' '}
                        <a href="tel:01093541323" className="hover:text-blue-400">
                            010-9354-1323
                        </a>
                    </p>
                </div>
            </footer>
        </main>
    );
}
