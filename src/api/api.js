const BASE_URL = 'http://127.0.0.1:8000/api'

export async function getProducts(params = {}) {
  const query = new URLSearchParams(params).toString()
  const res = await fetch(`${BASE_URL}/products${query ? '?' + query : ''}`)
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