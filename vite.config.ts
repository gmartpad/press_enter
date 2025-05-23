import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@contexts': path.resolve(__dirname, 'src/contexts'),
            '@contexts/*': path.resolve(__dirname, 'src/contexts/*'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@providers': path.resolve(__dirname, 'src/providers'),
            '@lang': path.resolve(__dirname, 'src/lang'),
            '@state/*': path.resolve(__dirname, 'src/state/*'),
            '@state': path.resolve(__dirname, 'src/state'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@upgrades': path.resolve(__dirname, 'src/state/upgrades')
        },
    },
})
