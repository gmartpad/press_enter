import { LoadingText, NotValidContainer } from './styled'
import { useIntl } from 'react-intl'

const Loading = () => {
    const intl = useIntl()

    return (
        <NotValidContainer $flexDirection='row'>
            <LoadingText>{intl.formatMessage({ id: 'broadcastProvider.loading' })}</LoadingText>
        </NotValidContainer>
    )
}

export default Loading