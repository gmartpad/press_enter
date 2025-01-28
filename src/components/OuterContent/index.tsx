import ConfigDialog from '@components/ConfigDialog'
import ConfirmDialog from '@components/ConfirmDialog'
import LanguageDialog from '@components/LanguageDialog'

const OuterContent = () => {
    return (
        <>
            <ConfigDialog />
            <ConfirmDialog />
            <LanguageDialog/>
        </>
    )
}

export default OuterContent