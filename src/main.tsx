import { loadFency } from '@fencyai/js'
import { FencyProvider } from '@fencyai/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const fency = loadFency({
    publishableKey: 'pk_c54e8f3b97154f629d8570fcd52e43804UA0H90HkKZ1Ytmg2a27uEkQ5OIUf3lX',
})

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <FencyProvider fency={fency}>
            <App />
        </FencyProvider>
    </StrictMode>
)
