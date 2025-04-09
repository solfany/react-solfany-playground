import react from "react";
import SubHeader from "../components/Header/SubHeader";
import FlexSection from "../components/ui/section/FlexSection";
import ProjectCard from "../components/ui/card/ProjectCard";
import ProductGrid from "../components/ui/grid/ProductGrid";
const Project = () => {
    const products = [
        {
            title: '자격증 기출문제',
            description: '다양한 규격의 산업용 및',
            subDescription: '상하수도용 플렌지',
            // 흰색 배경에 앞에 이미지만 있는 경우
            backgroundImageUrl: null,
            foregroundImageUrl: '/images/test2-removebg-preview.png',
            pageUrl: '/project/qualifications'
        },
        {
            title: '개발예정',
            description: '개발중입니다. 기대해주세요!',
            subDescription: '코파일럿 좋군요 하하',
            // 배경 이미지만 있는 경우
            backgroundImageUrl: '/images/fittings-bg.jpg',
            foregroundImageUrl: '/images/test2-removebg-preview.png',
            pageUrl: '/products/qualifications'
        },
        {
            title: '개발예정',
            description: '개발중입니다. 기대해주세요!',
            subDescription: '코파일럿 좋군요 하하',
            // 배경 이미지만 있는 경우
            backgroundImageUrl: '/images/fittings-bg.jpg',
            foregroundImageUrl: '/images/test2-removebg-preview.png',
            pageUrl: '/products/qualifications'
        },
        {
            title: '개발예정',
            description: '개발중입니다. 기대해주세요!',
            subDescription: '코파일럿 좋군요 하하',
            // 배경 이미지만 있는 경우
            backgroundImageUrl: '/images/fittings-bg.jpg',
            foregroundImageUrl: '/images/test2-removebg-preview.png',
            pageUrl: '/products/qualifications'
        },
        // 추가 제품이 있으면 자동으로 다음 줄로 이동합니다
    ];
    return (
        <div>
<FlexSection>
  <ProjectCard
    title="SIDE PROJECT"
    subtitle="부제목"
    content="여기에 내용이 들어갑니다."
    imageUrl="/images/test.jpg"
    showSearch={true} // 이거 추가 시 검색창/버튼이 보임
    onSearch={(keyword) => console.log("검색어:", keyword)}
    footer={<button className="text-blue-500">자세히 보기</button>}
  />
</FlexSection>


            <ProductGrid products={products} />

        </div>

    );
}
export default Project;