import React from "react"

export const LocalContext = React.createContext({
    language: 'en',
    onChangeLanguage: () => { }
})