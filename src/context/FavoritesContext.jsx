import { createContext, useContext, useState, useEffect } from 'react'
import { useUserEmail } from './UserEmailContext'

const FavoritesContext = createContext()
const getFavKey = (email) => email ? `stem_favorites_${email}` : null

export function FavoritesProvider({ children }) {
  const { userEmail } = useUserEmail()
  const [favorites, setFavorites] = useState([])

  // Загружаем при смене пользователя
  useEffect(() => {
    if (userEmail) {
      const saved = localStorage.getItem(getFavKey(userEmail))
      setFavorites(saved ? JSON.parse(saved) : [])
    } else {
      setFavorites([])
    }
  }, [userEmail])

  // Сохраняем при изменении
  useEffect(() => {
    if (userEmail) {
      localStorage.setItem(getFavKey(userEmail), JSON.stringify(favorites))
    }
  }, [favorites, userEmail])

  const toggleFavorite = (product) => {
    setFavorites(prev => {
      const exists = prev.find(item => item.id === product.id)
      if (exists) {
        return prev.filter(item => item.id !== product.id)
      }
      return [...prev, product]
    })
  }

  const isFavorite = (id) => favorites.some(item => item.id === id)

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export const useFavorites = () => useContext(FavoritesContext)