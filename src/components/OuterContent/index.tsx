import ConfigDialog from '@components/ConfigDialog'
import ConfirmDialog from '@components/ConfirmDialog'
import LanguageDialog from '@components/LanguageDialog'
import ExportSaveFileDialog from '@components/ExportSaveFileDialog'
import ImportSaveFileDialog from '@components/ImportSaveFileDialog'

const OuterContent = () => {
    return (
        <>
            <ExportSaveFileDialog />
            <ImportSaveFileDialog />
            <ConfigDialog />
            <ConfirmDialog />
            <LanguageDialog/>
        </>
    )
}

export default OuterContent