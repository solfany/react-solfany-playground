import react from "react";
import SubHeader from "../components/Header/SubHeader";
import FlexSection from "../components/ui/section/FlexSection";
import Card from "../components/ui/card/Card";
import ProductGrid from "../components/ui/grid/ProductGrid";
const Project = () => {
    const products = [
        {
            title: '자격증 기출문제',
            description: '다양한 규격의 산업용 및',
            subDescription: '상하수도용 플렌지',
            // 흰색 배경에 앞에 이미지만 있는 경우
            backgroundImageUrl: null,
            foregroundImageUrl: '/images/test.jpg',
            pageUrl: '/project/qualifications'
        },
        {
            title: 'Fittings',
            description: 'Tee, Reducer, Elbow, Cap, Lateral 등',
            subDescription: '모든 이음관',
            // 배경 이미지만 있는 경우
            backgroundImageUrl: '/images/fittings-bg.jpg',
            foregroundImageUrl: null,
            pageUrl: '/products/qualifications'
        },
        {
            title: 'Piping Materials',
            description: '주철관, PE관, 코팅강관, 스텐레스 등',
            subDescription: '유통가능 모든 종류 취급',
            // 배경 이미지와 앞에 이미지 모두 있는 경우
            backgroundImageUrl: '/images/piping-bg.jpg',
            foregroundImageUrl: '/images/piping-front.jpg',
            pageUrl: '/products/qualifications'
        },
        {
            title: 'Valves',
            description: '다양한 종류의 밸브',
            subDescription: '산업용 밸브 시스템',
            // 이미지가 둘 다 없는 경우 (흰색 배경만)
            backgroundImageUrl: null,
            foregroundImageUrl: null,
            pageUrl: '/products/qualifications'
        }
        // 추가 제품이 있으면 자동으로 다음 줄로 이동합니다
    ];
    return (
        <div>
            <FlexSection>
                <Card
                    title="SIDE PROJECT"
                    subtitle="부제목"
                    content="여기에 내용이 들어갑니다."
                    imageUrl="/images/test.jpg"
                    footer={<button className="text-blue-500">자세히 보기</button>}
                />
            </FlexSection>

            <ProductGrid products={products} />

        </div>

    );
}
export default Project;