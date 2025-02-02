import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from 'contexts/UserContext.tsx';
import { ProductContextProvider } from 'contexts/ProductContext.tsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <ProductContextProvider>
          <App />
        </ProductContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
