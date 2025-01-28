import { configState, type Config } from '@state/atoms'
import langs from '@lang'
import { IntlProvider } from 'react-intl'
import { useRecoilValue } from 'recoil'

interface LangProviderProps {
    children: React.ReactNode
}

const LangProvider = ({
    children
}: LangProviderProps) => {
    const config = useRecoilValue<Config>(configState)

    return (
        <IntlProvider
            locale={config.currentLanguageLocale}
            defaultLocale='en'
            messages={langs[config.currentLanguageLocale]}
        >
            {children}
        </IntlProvider>
    )
}

export default LangProvider