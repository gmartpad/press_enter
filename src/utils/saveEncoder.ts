import { SaveData } from '@state/atoms'

const ENCODE_KEY = import.meta.env.VITE_ENCODE_KEY ?? 'your-key-here'

// Helper function for XOR encryption/decryption
const xorEncrypt = (text: string, key: string): string => {
    let result = ''
    for (let i = 0; i < text.length; i++) {
        result += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length))
    }
    return result
}

export const encodeSaveData = (data: SaveData): string => {
    try {
        const jsonString = JSON.stringify(data)
        // Encrypt before Base64 encoding
        const encrypted = xorEncrypt(jsonString, ENCODE_KEY)
        return btoa(encrypted)
    } catch (error) {
        console.error('Error encoding save data:', error)
        return ''
    }
}
  

export const decodeSaveData = (encoded: string): SaveData | null => {
    try {
        const decoded = atob(encoded)
        // Decrypt after Base64 decoding
        const decrypted = xorEncrypt(decoded, ENCODE_KEY)
        const data = JSON.parse(decrypted)
        
        if (!data) {
            console.error('Invalid save data format')
            return null
        }
        
        return data
    } catch (error) {
        console.error('Error decoding save data:', error)
        return null
    }
}