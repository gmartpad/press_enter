import { StyledResetButton, StyledResetButtonH2 } from './styled'
import useDetectButtonClickBoolean from '@hooks/useDetectButtonClickBoolean'
import useSaveManager from '@hooks/useSaveManager'

interface ResetButtonProps {
    labelText: string
    additionalCallback?: () => void
}

const ResetButton = ({
    labelText = 'Reset All States',
    additionalCallback = () => {}
}: ResetButtonProps) => {
    const isClick = useDetectButtonClickBoolean()
    const { resetGame } = useSaveManager()

    const handleReset = () => {
        additionalCallback()
        resetGame()
    }

    return (
        <StyledResetButton
            onClick={() => {
                if(isClick) {
                    handleReset()
                }
            }}
            onTouchStart={() => {  
                if(!isClick) {
                    handleReset()
                }
            }}
        >
            <StyledResetButtonH2>
                {labelText}
            </StyledResetButtonH2>
        </StyledResetButton>
    )
}

export default ResetButton