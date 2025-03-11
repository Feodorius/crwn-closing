import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from 'contexts/UserContext.tsx';
import { CategoriesContextProvider } from 'contexts/CategoriesContext.tsx';
import { CartContextProvider } from 'contexts/CartContext.tsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <CategoriesContextProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </CategoriesContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
