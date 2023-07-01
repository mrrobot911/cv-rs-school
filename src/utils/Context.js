import { createContext } from "react";
import en from "../locales/en.locale.json";
import ru from "../locales/ru.locale.json";

export const themes = {
    dark: 'dark',
    light: 'light',
  }
export const locale = {
  en,
  ru,
  }
export const Context = createContext({})