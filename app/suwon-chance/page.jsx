import Image from 'next/image';

// 네이버 SEO 최적화 메타데이터
export const metadata = {
    title: '수원찬스돔나이트 강호동 후기 | 예약 부킹 주대 꿀팁 총정리',
    description:
        '수원찬스돔나이트 강호동 실제 후기! 예약 방법, 부킹 시스템, 주대 정보, 위치 접근성까지 완벽 가이드. 이용 전 필독! 전화 010-9354-1323',
    keywords:
        '수원찬스돔나이트, 강호동, 수원나이트, 수원클럽, 부킹, 예약, 후기, 주대',
    openGraph: {
        title: '수원찬스돔나이트 강호동 후기 | 예약 가이드',
        description: '수원찬스돔나이트 강호동 실제 이용 후기. 예약부터 주대까지 완벽 정리!',
        images: ['/images/main.jpg'],
        type: 'article'
    },
    other: {
        'naver-site-verification': '08ebef77790275e1763fc25ad8d6afa5989d74cd'
    },
    robots: {
        index: true,
        follow: true
    }
};

export default function SuwonChancePage() {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* 상단 메인 썸네일 이미지 */}
            <section className="w-full relative h-[300px] md:h-[500px] bg-black">
                <Image
                    src="/images/main.jpg"
                    alt="수원찬스돔나이트 강호동 예약 입구"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
            </section>

            {/* 전화 걸기 버튼 (상단 고정) */}
            <section className="sticky top-0 z-50 bg-gradient-to-r from-red-600 to-pink-600 shadow-2xl">
                <div className="container mx-auto px-4 py-4">
                    <a
                        href="tel:01093541323"
                        className="flex items-center justify-center gap-3 w-full max-w-xl mx-auto bg-white text-red-600 py-4 px-6 rounded-full font-bold text-lg md:text-xl shadow-xl hover:bg-red-50 transition-all duration-300 hover:scale-105 animate-pulse"
                    >
                        <span className="text-2xl">📞</span>
                        <span>강호동에게 바로 전화하기: 010-9354-1323</span>
                    </a>
                </div>
            </section>

            {/* 메인 콘텐츠 영역 - 블로그 스타일 */}
            <article className="container mx-auto px-4 py-8 md:py-12 max-w-3xl bg-white my-8 rounded-lg shadow-lg">
                {/* 메인 제목 (H1) */}
                <header className="mb-8 pb-6 border-b-2 border-gray-200">
                    <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                        수원찬스돔나이트 강호동 후기 | 예약 부킹 주대 완벽 가이드
                    </h1>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>⏰ 2025년 최신 후기</span>
                        <span>👤 실제 이용자</span>
                        <span>💯 리얼 후기</span>
                    </div>
                </header>

                {/* 도입부 - 서론 (키워드 1개) */}
                <section className="mb-10">
                    <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-4">
                        안녕하세요. 오늘은 제가 지난 주말에 친구들이랑 다녀온{' '}
                        <strong className="text-red-600 text-xl">수원찬스돔나이트</strong> 실제 이용 후기를 남겨보려고 합니다.
                        처음 가시는 분들은 담당을 누구로 할지 진짜 고민이 많으실 거예요. 인터넷에 정보도 많지 않고,
                        괜히 잘못 선택하면 돈만 날리고 기분만 상할까봐 걱정이 컸거든요.
                    </p>
                    <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-4">
                        그러던 중에 지인한테 소개받은 <strong className="text-red-600">강호동</strong> 담당이 정말 괜찮다는 얘기를 들었습니다. 
                        이름부터 믿음직스럽지 않나요? ㅋㅋ 실제로도 정말 프로페셔널하더라구요.
                    </p>
                </section>

                {/* 첫 번째 CTA */}
                <div className="my-8 p-6 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl border-2 border-red-200">
                    <p className="text-center text-lg font-bold text-gray-800 mb-4">
                        💡 먼저 연락하고 싶으신 분들은 아래 번호로!
                    </p>
                    <a
                        href="tel:01093541323"
                        className="block w-full max-w-md mx-auto bg-red-600 text-white text-center py-4 px-6 rounded-full font-bold text-xl shadow-lg hover:bg-red-700 transition-all duration-300"
                    >
                        📞 010-9354-1323 (강호동)
                    </a>
                </div>

                {/* 본문 1 - 첫인상 (키워드 1개) */}
                <section className="mb-10">
                    <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-300">
                        🎯 강호동 담당 첫인상 후기
                    </h2>
                    <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-4">
                        예약을 위해 전화로 먼저 연락을 했는데요, 통화부터 완전 프로더라구요. 
                        "몇 분이세요?", "시간은 언제가 편하세요?", "분위기는 어떤 걸 선호하세요?" 
                        이렇게 하나하나 물어보면서 우리 스타일에 맞는 자리를 미리 알아봐주시더라구요.
                    </p>
                    <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
                        <strong className="text-red-600">수원찬스돔나이트</strong>는 워낙 주말에 사람이 많아서 예약 없이 가면 진짜 헛걸음할 수도 있어요. 
                        특히 금요일, 토요일은 거의 풀부킹이라고 보시면 됩니다. 
                        그래서 강호동 담당한테 최소 하루 전에 연락해서 예약하는 게 좋아요.
                    </p>
                </section>

                {/* 이미지 1 */}
                <div className="my-10 rounded-lg overflow-hidden shadow-xl">
                    <Image
                        src="/images/model1.jpg"
                        alt="수원나이트 즐거운 분위기"
                        width={800}
                        height={600}
                        className="w-full h-auto"
                        sizes="(max-width: 768px) 100vw, 800px"
                    />
                    <p className="text-center text-sm text-gray-500 mt-2 px-4">
                        ▲ 수원나이트 즐거운 분위기 (이미지 출처: 실제 방문 촬영)
                    </p>
                </div>

                {/* 본문 2 - 입장 및 룸 배정 (키워드 1개) */}
                <section className="mb-10">
                    <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-300">
                        🚪 입구부터 확실한 케어 - 강호동 담당 후기
                    </h2>
                    <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-4">
                        입구에 도착하니까 강호동 담당이 이미 나와서 기다리고 계시더라구요. 
                        "안녕하세요~ 예약하신 분들이시죠?" 하면서 웃으며 반겨주시는데,
                        첫인상부터 '아 여기 제대로 왔구나' 싶었어요.
                    </p>
                    <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-4">
                        <strong className="text-red-600">수원찬스돔나이트</strong>는 내부가 꽤 넓고 복잡한데, 
                        강호동 담당이 쭉쭉 길을 안내해주면서 우리한테 딱 맞는 룸으로 데려다 주셨어요. 
                        룸 자체도 깔끔하고 분위기 좋았습니다.
                    </p>
                    <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
                        그리고 자리 잡자마자 "주대는 어느 정도 생각하세요?" 물어보시면서 우리 예산에 맞춰서 메뉴 추천도
                        해주시더라구요. 괜히 비싼 걸 권하지 않고, 가성비 좋은 걸로 알려주셔서 진짜 좋았어요.
                    </p>
                </section>

                {/* 본문 3 - 부킹 시스템 */}
                <section className="mb-10">
                    <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-300">
                        💃 부킹 시스템 - 강호동 담당 프로 케어 후기
                    </h2>
                    <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-4">
                        솔직히 부킹은 담당 역량에 따라 천차만별이잖아요.
                        어떤 데는 한 번 불러놓고 끝인 곳도 있고, 계속 신경 써주는 곳도 있고...
                    </p>
                    <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-4">
                        근데 강호동은 진짜 쉴 새 없이 챙겨주더라구요. 
                        한 타임 끝나면 "다음 분들 어떠세요?" 하면서 계속 물어보시고, 
                        우리 스타일 파악하셔서 그에 맞는 분들로 계속 매칭해주시는 거예요.
                    </p>
                    <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
                        친구들도 다들 "야 여기 담당 누구야? 진짜 잘하네" 하면서 감탄했어요. 덕분에 그날 진짜 재밌게 놀다 왔습니다.
                    </p>
                </section>

                {/* 이미지 2 */}
                <div className="my-10 rounded-lg overflow-hidden shadow-xl">
                    <Image
                        src="/images/model2.jpg"
                        alt="수원찬스 부킹 현장"
                        width={800}
                        height={600}
                        className="w-full h-auto"
                        sizes="(max-width: 768px) 100vw, 800px"
                    />
                    <p className="text-center text-sm text-gray-500 mt-2 px-4">▲ 수원찬스 부킹 현장 분위기</p>
                </div>

                {/* 본문 4 - 주대 및 가격 정보 (키워드 1개) */}
                <section className="mb-10">
                    <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-300">
                        💰 주대 및 가격 정보 (솔직 후기)
                    </h2>
                    <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-4">
                        많은 분들이 궁금해하시는 주대 얘기를 해볼게요.
                        평일이랑 주말이 가격이 좀 다릅니다.
                    </p>
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-2">
                            ✅ <strong>평일</strong>: 상대적으로 여유롭고 가격도 합리적
                        </p>
                        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-2">
                            ✅ <strong>주말</strong>: 사람이 많아서 미리 예약 필수!
                        </p>
                        <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                            ✅ <strong>꿀팁</strong>: 강호동한테 미리 전화해서 예산 말하면 딱 맞춰서 추천해줌
                        </p>
                    </div>
                    <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
                        <strong className="text-red-600">수원찬스돔나이트</strong> 정확한 금액은 인원수, 메뉴 선택에 따라 달라지니까
                        강호동 담당한테 직접 물어보시는 게 제일 정확해요. 전화하면 친절하게 다 알려주십니다!
                    </p>
                </section>

                {/* 중간 CTA */}
                <div className="my-10 p-8 bg-gradient-to-br from-red-600 to-pink-600 rounded-2xl shadow-2xl text-center">
                    <p className="text-white text-xl md:text-2xl font-bold mb-4">🔥 지금 바로 강호동에게 전화하세요!</p>
                    <p className="text-white text-base mb-6">
                        주말 예약은 빨리 마감됩니다. 미리 연락하셔서 자리 확보하세요!
                    </p>
                    <a
                        href="tel:01093541323"
                        className="inline-block bg-white text-red-600 py-4 px-8 rounded-full font-bold text-xl shadow-lg hover:bg-gray-100 transition-all duration-300 hover:scale-110"
                    >
                        📞 010-9354-1323 클릭하여 전화하기
                    </a>
                </div>

                {/* 본문 5 - 분위기 및 시설 */}
                <section className="mb-10">
                    <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-300">
                        🎵 분위기 및 시설 솔직 리뷰
                    </h2>
                    <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-4">
                        수원에서 꽤 오래된 곳이라 시설이 낡았을까 걱정했는데, 
                        내부 리모델링을 계속 하는지 생각보다 깔끔하고 세련됐어요.
                    </p>
                    <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-4">
                        음향 시설도 좋고, 조명도 화려해서 분위기는 확실히 살아있습니다. 
                        룸마다 크기가 다른데, 인원수에 맞춰서 강호동이 알아서 배정해주시니까 걱정 안 하셔도 돼요.
                    </p>
                    <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
                        화장실도 깨끗하고, 전체적으로 위생 관리가 잘 되어 있더라구요. 
                        이런 디테일한 부분까지 신경 쓴 게 느껴졌어요.
                    </p>
                </section>

                {/* 이미지 3 */}
                <div className="my-10 rounded-lg overflow-hidden shadow-xl">
                    <Image
                        src="/images/model3.jpg"
                        alt="수원찬스돔나이트 내부 분위기"
                        width={800}
                        height={600}
                        className="w-full h-auto"
                        sizes="(max-width: 768px) 100vw, 800px"
                    />
                    <p className="text-center text-sm text-gray-500 mt-2 px-4">▲ 수원찬스돔나이트 내부 분위기</p>
                </div>

                {/* 본문 6 - 접근성 및 위치 */}
                <section className="mb-10">
                    <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-300">
                        🚗 위치 및 접근성 정보
                    </h2>
                    <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-4">
                        수원역에서 가깝고 대중교통으로도 접근하기 편해요.
                        차로 오시는 분들은 근처에 주차 공간도 있으니 참고하세요.
                    </p>
                    <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
                        정확한 위치나 주차 관련 정보는 예약할 때 강호동 담당한테 물어보시면 자세하게 알려주십니다.
                        처음 가시는 분들은 길 헤맬 수 있으니 꼭 미리 물어보세요!
                    </p>
                </section>

                {/* 본문 7 - 종합 평가 (키워드 1개) */}
                <section className="mb-10">
                    <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-300">
                        ⭐ 종합 평가 및 추천 대상
                    </h2>
                    <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-4">
                        결론부터 말씀드리면 <strong>대만족</strong>입니다! 👍
                    </p>
                    <ul className="list-none space-y-3 mb-6">
                        <li className="flex items-start gap-3 text-base md:text-lg text-gray-800">
                            <span className="text-green-600 font-bold">✓</span>
                            <span><strong>강호동 담당</strong>의 프로페셔널한 서비스</span>
                        </li>
                        <li className="flex items-start gap-3 text-base md:text-lg text-gray-800">
                            <span className="text-green-600 font-bold">✓</span>
                            <span>예산에 맞춰 유연하게 대응 가능</span>
                        </li>
                        <li className="flex items-start gap-3 text-base md:text-lg text-gray-800">
                            <span className="text-green-600 font-bold">✓</span>
                            <span>부킹 시스템이 탄탄하고 계속 케어해줌</span>
                        </li>
                        <li className="flex items-start gap-3 text-base md:text-lg text-gray-800">
                            <span className="text-green-600 font-bold">✓</span>
                            <span>시설 깨끗하고 분위기 좋음</span>
                        </li>
                        <li className="flex items-start gap-3 text-base md:text-lg text-gray-800">
                            <span className="text-green-600 font-bold">✓</span>
                            <span>수원역 근처라 접근성 좋음</span>
                        </li>
                    </ul>
                    <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-4">
                        <strong>이런 분들께 추천합니다:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-800 mb-6 pl-4">
                        <li className="text-base md:text-lg">수원에서 제대로 된 나이트를 찾는 분</li>
                        <li className="text-base md:text-lg">믿을 만한 담당을 찾는 분</li>
                        <li className="text-base md:text-lg"><strong className="text-red-600">수원찬스돔나이트</strong> 주말 예약을 원하는 분</li>
                        <li className="text-base md:text-lg">가성비 좋은 이용을 원하는 분</li>
                    </ul>
                </section>

                {/* 본문 8 - 주의사항 및 팁 */}
                <section className="mb-10">
                    <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-300">
                        📌 이용 전 꼭 알아두세요! (주의사항 & 꿀팁)
                    </h2>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-4">
                        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-3">
                            <strong className="text-blue-700">💡 꿀팁 1:</strong> 주말은 최소 1-2일 전에 예약하세요! 당일은 거의 불가능합니다.
                        </p>
                        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-3">
                            <strong className="text-blue-700">💡 꿀팁 2:</strong> 예산을 솔직하게 말하면 그에 맞춰서 강호동이 알아서 조율해줍니다.
                        </p>
                        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-3">
                            <strong className="text-blue-700">💡 꿀팁 3:</strong> 첫 방문이시면 전화할 때 "처음이에요" 라고 말씀하세요. 더 자세하게 설명해주십니다.
                        </p>
                        <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                            <strong className="text-blue-700">💡 꿀팁 4:</strong> 평일 방문이 여유롭고 가성비도 좋습니다!
                        </p>
                    </div>
                </section>

                {/* 마지막 CTA */}
                <section className="my-12 p-10 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl text-center">
                    <h2 className="text-white text-2xl md:text-4xl font-bold mb-4">
                        🎉 강호동 예약하기
                    </h2>
                    <p className="text-gray-300 text-base md:text-lg mb-6">
                        지금 바로 전화해서 예약하세요!
                        <br />
                        주말은 빠르게 마감되니 서두르세요! 💨
                    </p>
                    <a
                        href="tel:01093541323"
                        className="inline-block bg-red-600 text-white py-5 px-10 rounded-full font-bold text-xl md:text-2xl shadow-lg hover:bg-red-700 transition-all duration-300 hover:scale-110 mb-4"
                    >
                        📞 010-9354-1323
                    </a>
                    <p className="text-gray-400 text-sm mt-4">
                        ※ 통화 시 "후기 보고 연락드렸어요" 하시면 더 친절하게 안내해드립니다!
                    </p>
                </section>

                {/* 마무리 - 결론 (키워드 2개) */}
                <section className="mb-8 pt-8 border-t-2 border-gray-200">
                    <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-4">
                        여기까지 제가 직접 경험한{' '}
                        <strong className="text-red-600 text-xl">수원찬스돔나이트</strong> 강호동 후기였습니다.
                        처음에는 고민이 많았는데, 결과적으로 정말 잘 다녀왔어요.
                    </p>
                    <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-4">
                        <strong className="text-red-600">수원찬스돔나이트</strong>에서 제대로 즐기고 싶으신 분들이라면
                        강호동 담당한테 연락해보세요. 후회 안 하실 겁니다! 😊
                    </p>
                    <p className="text-base md:text-lg text-gray-800 leading-relaxed font-bold text-center mt-8 p-6 bg-yellow-100 rounded-lg">
                        💬 궁금한 점 있으시면 주저 말고 <span className="text-red-600">010-9354-1323</span>으로 전화주세요!
                    </p>
                </section>

                {/* 태그 (SEO용) */}
                <footer className="mt-12 pt-6 border-t border-gray-300">
                    <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-bold">
                            #수원찬스돔나이트
                        </span>
                        <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-bold">
                            #수원찬스돔나이트강호동
                        </span>
                        <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                            #수원찬스돔나이트예약
                        </span>
                        <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                            #수원찬스돔나이트후기
                        </span>
                        <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                            #수원찬스돔나이트주대
                        </span>
                        <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                            #수원찬스돔나이트부킹
                        </span>
                        <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                            #수원찬스돔나이트위치
                        </span>
                        <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">#수원찬스</span>
                        <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">#강호동</span>
                        <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">#수원나이트</span>
                    </div>
                </footer>
            </article>

            {/* 하단 고정 전화 버튼 (모바일용) */}
            <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
                <a
                    href="tel:01093541323"
                    className="block w-full bg-red-600 text-white text-center py-5 font-bold text-lg shadow-2xl"
                >
                    📞 지금 바로 전화하기: 010-9354-1323
                </a>
            </div>
        </main>
    );
}
