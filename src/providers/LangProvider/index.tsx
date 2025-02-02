import { configState } from '@state/atoms'
import langs from '@lang'
import { IntlProvider } from 'react-intl'
import { useAtomValue } from 'jotai'

interface LangProviderProps {
    children: React.ReactNode
}

const LangProvider = ({
    children
}: LangProviderProps) => {
    const config = useAtomValue(configState)

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