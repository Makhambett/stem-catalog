import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { LanguageProvider } from './i18n/LanguageContext'
import { UserEmailProvider } from './context/UserEmailContext'
import { CartProvider } from './context/CartContext'
import { AuthProvider } from './context/AuthContext'
import { FavoritesProvider } from './context/FavoritesContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <UserEmailProvider>
          <CartProvider>
            <FavoritesProvider>
              <AuthProvider>
                <App />
              </AuthProvider>
            </FavoritesProvider>
          </CartProvider>
        </UserEmailProvider>
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
)