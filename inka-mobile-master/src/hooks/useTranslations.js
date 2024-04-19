import { useContext } from "react";
import { TranslationContext } from "../context/i18next";

export const useTranslations = () => useContext(TranslationContext);
