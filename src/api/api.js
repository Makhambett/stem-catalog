// ✅ Базовый URL: продакшен или локальная разработка
const BASE_URL = 
  import.meta.env.VITE_API_URL_BACKEND || 
  import.meta.env.VITE_API_URL || 
  'http://localhost:8000/api'

export async function getProducts(params = {}) {
  const query = new URLSearchParams(params).toString()
  const url = `${BASE_URL}/products${query ? '?' + query : ''}`
  const res = await fetch(url)
  
  if (!res.ok) {
    throw new Error(`Ошибка загрузки товаров: ${res.status}`)
  }
  
  return res.json()
}

export async function getProductById(id) {
  const res = await fetch(`${BASE_URL}/products/${id}`)
  
  if (!res.ok) {
    throw new Error(`Товар не найден: ${id}`)
  }
  
  return res.json()
}

export async function getCategories() {
  const res = await fetch(`${BASE_URL}/categories`)
  return res.json()
}

export async function createOrder(data) {
  const res = await fetch(`${BASE_URL}/orders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  return res.json()
}

export async function createApplication(data) {
  const res = await fetch(`${BASE_URL}/applications`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  return res.json()
}