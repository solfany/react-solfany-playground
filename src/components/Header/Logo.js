import CustomLink from "../ui/customLink/CustomLink";
const Logo = () => {
  return (
    <div className="logo">
      <CustomLink to="/" className="logo-link">
        <div className="logo-main">
          <span className="logo-highlight">S</span>OLFANY
        </div>
        <div className="logo-sub">우아한(척 하는) 개발자</div>
      </CustomLink>
    </div>
  );
};

export default Logo;