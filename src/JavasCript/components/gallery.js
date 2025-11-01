export const renderPhotos = (listEl, photos, label = '') => {
  const frag = document.createDocumentFragment()
  for (const photo of photos) {
    const li = document.createElement('li')
    li.className = 'card'
    const figure = document.createElement('figure')
    const img = document.createElement('img')
    img.loading = 'lazy'
    img.alt = photo.alt_description || 'Foto de Unsplash'
    img.src = photo.urls?.small || photo.urls?.regular || photo.urls?.thumb
    const figcap = document.createElement('figcaption')
    figcap.className = 'card__meta'
    const avatar = document.createElement('img')
    avatar.className = 'card__avatar'
    avatar.alt = photo.user?.name || 'Autor'
    avatar.src =
      photo.user?.profile_image?.small ||
      photo.user?.profile_image?.medium ||
      ''
    const userWrap = document.createElement('div')
    userWrap.className = 'card__user'
    const userLink = document.createElement('a')
    userLink.href = photo.user?.links?.html || '#'
    userLink.target = '_blank'
    userLink.rel = 'noreferrer'
    userLink.textContent = photo.user?.name || 'Autor'
    const username = document.createElement('span')
    username.textContent = photo.user?.username ? `@${photo.user.username}` : ''
    const lab = document.createElement('span')
    lab.className = 'card__label'
    lab.textContent =
      label || (photo.likes != null ? `${photo.likes} ❤` : 'Foto')
    userWrap.append(userLink, username)
    figcap.append(avatar, userWrap, lab)
    figure.append(img, figcap)
    li.append(figure)
    frag.append(li)
  }
  listEl.replaceChildren(frag)
}
