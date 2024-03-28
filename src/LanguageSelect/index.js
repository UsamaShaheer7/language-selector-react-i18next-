import React, { useEffect } from "react";
import {  useTranslation } from "react-i18next";
import { languages } from "../helper/utilities";

export default function LanguageSelect() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n.language]);
  return (
    <div className="App">

        <select
          onChange={(e) => changeLanguage(e.target.value)}
          value={i18n.language}
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {t(lang.label)}
            </option>
          ))}
        </select>
   
    </div>
  );
}
