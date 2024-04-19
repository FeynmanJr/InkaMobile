import React from "react";
import { I18nextProvider } from "react-i18next";
import i18next from "./i18next";

const LanguageProvider = ({ children }) => {
  return <I18nextProvider i18next={i18next}>{children}</I18nextProvider>;
};

export default LanguageProvider;
