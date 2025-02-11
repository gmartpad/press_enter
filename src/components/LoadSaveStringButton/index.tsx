import useSaveManager from "@hooks/useSaveManager"
import { useState, useCallback } from "react"
import { useIntl } from "react-intl"
import { styled } from "styled-components"
import { decodeSaveData } from "@utils/saveEncoder"
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 16px 0;
`

const Input = styled.textarea`
  width: 100%;
  min-height: 80px;
  padding: 8px;
  background: #1a1a1a;
  border: 1px solid #333;
  color: #fff;
  border-radius: 4px;
  font-family: monospace;
  resize: vertical;
`

const Button = styled.button`
  padding: 8px 16px;
  background: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #444;
  }

  &:disabled {
    background: #222;
    cursor: not-allowed;
  }
`

const ErrorMessage = styled.div`
  color: #ff4444;
  font-size: 14px;
  margin-top: 4px;
`

const LoadSaveStringButton = () => {
    const [saveString, setSaveString] = useState('')
    const [error, setError] = useState('')
    const { loadGame } = useSaveManager()
    const intl = useIntl()

    const handleLoad = useCallback(() => {
        try {
            // First validate if it can be decoded
            const decoded = decodeSaveData(saveString)
            if (!decoded) {
                setError(intl.formatMessage({ id: 'loadSave.invalidSave' }))
                return
            }

            // Store the save string and attempt to load it
            localStorage.setItem('gameState', saveString)
            const success = loadGame()

            if (!success) {
                setError(intl.formatMessage({ id: 'loadSave.loadError' }))
                localStorage.removeItem('gameState')
            } else {
                setSaveString('')
                setError('')
            }
        } catch (err) {
            console.error(err)
            setError(intl.formatMessage({ id: 'loadSave.invalidSave' }))
        }
    }, [saveString, loadGame, intl])

    return (
        <Container>
            <Input
                value={saveString}
                onChange={(e) => setSaveString(e.target.value)}
                placeholder={intl.formatMessage({ id: 'loadSave.placeholder' })}
            />
            <Button 
                onClick={handleLoad}
                disabled={!saveString}
            >
                {intl.formatMessage({ id: 'loadSave.button' })}
            </Button>
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </Container>
    )
}

export default LoadSaveStringButton 