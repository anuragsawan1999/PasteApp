import { StrictMode } from 'react'
import { Toaster } from 'react-hot-toast';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> 
        {/* provider ke andar humne store ko de diya h sath mein apo ko wrap krwa diya hai ,wrap ke andar koi child component is store ko access krna chahe to kr skta hai ab ye centralized store ki tarah kaam krega */}
      <App />
         <Toaster />
    </Provider>
  
  </StrictMode>,
)
