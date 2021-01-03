import { createContext, useContext, useState } from "react"

export type Locale = "en-US" | "en-AU" | "en-CA" | "en-IE" | "en-ZA" | "en-GB"
export type Currency = "USD" | "AUD" | "CAD" | "EUR" | "ZAR" | "GBP"
export const locales = ["en-US", "en-AU", "en-CA", "en-IE", "en-ZA", "en-GB"]
export const currencies = ["USD", "AUD", "CAD", "EUR", "ZAR", "GBP"]
const localeLookup: Record<Locale, Currency> = {
    "en-US": "USD",
    "en-AU": "AUD",
    "en-CA": "CAD",
    "en-IE": "EUR",
    "en-ZA": "ZAR",
    "en-GB": "GBP"
}
type SetLocale = (locale: Locale) => void
type GetCurrency = () => Currency
interface LocalizationContext {
    locale: Locale
    setLocale: SetLocale
    getCurrency: GetCurrency
}
const LocaleContext = createContext({
    locale: "en-US",
    setLocale: () => null,
    getCurrency: () => "USD"
} as LocalizationContext);

export function useLocale(){
    const {locale, setLocale, getCurrency} = useContext(LocaleContext)

    return {
        locale,
        setLocale,
        getCurrency
    }
}

export function LocalizationProvider(props: { children: React.ReactNode; }) {
    const [locale, setLocale] = useState<Locale>("en-US")

    function handleSetLocale(locale: Locale){ 
        setLocale(locale)
    }

    function getCurrency(){
        return localeLookup[locale]
    }


    return (
        <LocaleContext.Provider value={{locale, setLocale: handleSetLocale, getCurrency}}>
            {props.children}
        </LocaleContext.Provider>
    );
}