const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY
const base = 'https://api.unsplash.com'
const headers = { 'Accept-Version': 'v1' }
export async function fetchPhotosLatest({ perPage = 30, page = 1 } = {}) {
  const url = `${base}/photos?per_page=${perPage}&page=${page}&order_by=latest&client_id=${ACCESS_KEY}`
  const res = await fetch(url, { headers })
  if (!res.ok) throw new Error(`Unsplash /photos: ${res.status}`)
  return res.json()
}
export async function searchPhotos(query, { perPage = 30, page = 1 } = {}) {
  const q = query.trim()
  if (!q) return { results: [] }
  const url = `${base}/search/photos?query=${encodeURIComponent(
    q
  )}&per_page=${perPage}&page=${page}&client_id=${ACCESS_KEY}`
  const res = await fetch(url, { headers })
  if (!res.ok) throw new Error(`Unsplash /search/photos: ${res.status}`)
  return res.json()
}
