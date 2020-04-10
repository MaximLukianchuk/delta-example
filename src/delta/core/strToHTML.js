export const strToHTML = str => {
  const div = document.createElement('div')
  div.innerHTML = str.trim()
  
  return div.firstChild
}
