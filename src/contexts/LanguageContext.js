//src/contexts/LanguageContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import i18n from "../i18n/index";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(i18n.language || "ko");

  const setLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguageState(lang);
  };

  useEffect(() => {
    i18n.on("languageChanged", setLanguageState);
    return () => i18n.off("languageChanged", setLanguageState);
  }, []);
  console.log("LanguageProvider initialized");
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
