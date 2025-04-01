// Img.js
const Img = ({ src, alt, className = "" }) => (
    <img src={src} alt={alt} className={className} loading="lazy" />
);

export default Img;
