import { $ } from '../src/lib/dom.js'
import { renderPhotos } from '../src/components/gallery.js'
import { mountSearch } from '../src/components/searchBar.js'
import { fetchPhotosLatest, searchPhotos } from '../src/api/unsplash.js'
const gallery = $('#gallery')
const logoBtn = $('#logoBtn')
const searchForm = $('#searchForm')
const searchInput = $('#searchInput')
async function loadInitial() {
  const data = await fetchPhotosLatest({ perPage: 30 })
  renderPhotos(gallery, data, 'Nuevo')
}
async function doSearch(q) {
  const data = await searchPhotos(q, { perPage: 30 })
  renderPhotos(gallery, data.results || [], `#${q.trim()}`)
}
mountSearch({ form: searchForm, input: searchInput, onQuery: doSearch })
logoBtn.addEventListener('click', loadInitial)
;(async function init() {
  if (!import.meta.env.VITE_UNSPLASH_ACCESS_KEY) {
    alert('Configura VITE_UNSPLASH_ACCESS_KEY en tu .env')
    return
  }
  try {
    await loadInitial()
  } catch (e) {
    console.error(e)
    alert('No se pudieron cargar las fotos iniciales.')
  }
})()
