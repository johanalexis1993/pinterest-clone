export function renderPhotos(listEl, photos, label = '') {
  const frag = document.createDocumentFragment()
  for (const p of photos) {
    const li = document.createElement('li')
    li.className = 'card'
    const figure = document.createElement('figure')
    const img = document.createElement('img')
    img.loading = 'lazy'
    img.alt = p.alt_description || 'Foto de Unsplash'
    img.src = p.urls?.small || p.urls?.regular || p.urls?.thumb
    const figcap = document.createElement('figcaption')
    figcap.className = 'card__meta'
    const avatar = document.createElement('img')
    avatar.className = 'card__avatar'
    avatar.alt = p.user?.name || 'Autor'
    avatar.src =
      p.user?.profile_image?.small || p.user?.profile_image?.medium || ''
    const userWrap = document.createElement('div')
    userWrap.className = 'card__user'
    const userLink = document.createElement('a')
    userLink.href = p.user?.links?.html || '#'
    userLink.target = '_blank'
    userLink.rel = 'noreferrer'
    userLink.textContent = p.user?.name || 'Autor'
    const username = document.createElement('span')
    username.textContent = p.user?.username ? `@${p.user.username}` : ''
    const lab = document.createElement('span')
    lab.className = 'card__label'
    lab.textContent = label || (p.likes != null ? `${p.likes} ❤` : 'Foto')
    userWrap.append(userLink, username)
    figcap.append(avatar, userWrap, lab)
    figure.append(img, figcap)
    li.append(figure)
    frag.append(li)
  }
  listEl.replaceChildren(frag)
}
