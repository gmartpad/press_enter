import { FormattedMessage, type IntlShape, useIntl } from 'react-intl'
import { NotValidContainer, StyledReloadButton } from './styled'

const ReloadButton = ({
    intl
}: {
    intl: IntlShape
}) => {
    return (
        <StyledReloadButton 
            onClick={() => location.reload()}
        >
            {intl.formatMessage({ id: 'broadcastProvider.accessDenied.clickHere' })}
        </StyledReloadButton>
    )
}

const AccessDenied = () => {
    const intl = useIntl()
    return (
        <NotValidContainer $flexDirection="column">
            <FormattedMessage 
                id='broadcastProvider.accessDenied.title' 
                tagName='h1' 
            />
            <FormattedMessage 
                id='broadcastProvider.accessDenied.primaryDescription' 
                tagName='h2'
            />
            <FormattedMessage 
                id='broadcastProvider.accessDenied.secondaryDescription'
                tagName='h3'
                values={{
                    reloadButton: (<ReloadButton intl={intl}/>)
                }}
            />
        </NotValidContainer>
    )
}

export default AccessDenied