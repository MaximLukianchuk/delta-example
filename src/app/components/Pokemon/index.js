import { get } from 'delta'

export default ({ onMount }) => {
  let id = Math.floor(Math.random() * 10000000)

  onMount(() => {
    get('https://api.ipify.org/?format=json')
      .then(({ip}) => {
        document.getElementById(id + '_title').innerText = ip
        document.getElementById(id + '_ip').innerText = ip
      })
  })

  return `
    <h1 id=${id + '_title'} class="title">{{title}}</h1>
    <h2 id=${id + '_ip'} >{{ip}}</h2>
  `
}
