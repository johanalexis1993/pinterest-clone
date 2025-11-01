export const mountSearch = ({ form, input, onQuery }) => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const q = input.value
    await onQuery(q)
    input.value = ''
    input.focus()
  })
}
