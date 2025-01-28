import { Props, US, BR, ES, CN, IN, FR, BD, RU, PK, ID, SA } from 'country-flag-icons/react/3x2'

export type LanguageValues = 'en' | 'es' | 'pt-br' | 'zh-cn' | 'hi-in' | 'fr' | 'ar' | 'bn' | 'ru' | 'ur' | 'id'

interface Language {
    value: LanguageValues
    label: string
    Flag?: (props: Props) => JSX.Element
}

export type Languages = Language[]

const languages: Languages = [
    {
        value: 'en',
        label: 'English',
        Flag: US
    },
    {
        value: 'pt-br',
        label: 'Português',
        Flag: BR,
    },
    {
        value: 'es',
        label: 'Español',
        Flag: ES,
    },
    {
        value: 'zh-cn',
        label: '简体中文',
        Flag: CN,
    },
    {
        value: 'hi-in',
        label: 'हिन्दी',
        Flag: IN
    },
    {
        value: 'fr',
        label: 'Français',
        Flag: FR
    },
    {
        value: 'ar',
        label: 'عربي',
        Flag: SA
    },
    {
        value: 'bn',
        label: 'বাংলা',
        Flag: BD
    }, 
    {
        value: 'ru',
        label: 'Русский',
        Flag: RU
    },
    {
        value: 'ur',
        label: 'اردو',
        Flag: PK
    },
    {
        value: 'id',
        label: 'Indonesia',
        Flag: ID
    }
]

export {
    languages
}