import { useEffect, useState } from 'react'
import { Context, themes, locale } from './Context.js'

const getContext = () => {
  const theme = `${window?.localStorage?.getItem('theme')}`

  if (Object.values(themes).includes(theme)) return theme
  const userMedia = window.matchMedia('(prefers-color-scheme: light)');
  if (userMedia.matches) return themes.light

  return themes.dark
}
const getLocale = () => {
  const lang = `${window?.localStorage?.getItem('local')}`

  if (Object.keys(locale).includes(lang)) return lang
  const userLang = window.navigator.language;

  if (Object.keys(locale).includes(userLang.slice(0,2))) return userLang.slice(0,2)
  return "en"
}
// eslint-disable-next-line react/prop-types
const Provider = ({ children }) => {
  const [ context, setContext ] = useState({theme:getContext(), local:getLocale()});

  useEffect(() => {
    document.documentElement.dataset.theme = context.theme;
    document.documentElement.dataset.local = context.local;
    localStorage.setItem('theme', context.theme);
    localStorage.setItem('local', context.local);
  }, [ context ])

  return (
    <Context.Provider value={{ context, setContext }}>
      {children}
    </Context.Provider>
  )
}

export default Provider