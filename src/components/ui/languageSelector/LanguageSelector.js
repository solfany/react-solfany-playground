// src/components/ui/languageSelector/LanguageSelector.js
import "../../../styles/components/languageSelector/_LanguageSelector.scss";

const languages = [
  { code: "ko", label: "🇰🇷 한국어" },
  { code: "en", label: "🇺🇸 English" },
  { code: "ja", label: "🇯🇵 日本語" },
];

// 함수형으로 language item 배열을 리턴
export const getLanguageItems = (setLanguage, closeMenu) =>
  languages.map(({ code, label }) => ({
    label,
    action: () => {
      setLanguage(code);
      closeMenu?.(); // 드롭다운 닫기 (선택)
    },
  }));

