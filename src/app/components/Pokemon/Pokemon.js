import { get } from 'delta'

import ResumeCard from '../ResumeCard'
import withHeader from '../../hocs/withHeader'
import charizardResume from '../../static/charizardResume.pdf'

import './Pokemon.css'

const Pokemon = props => {
  const getItems = get('https://pokeapi.co/api/v2/pokemon/charizard/')
  
  const images = [
    { type: 'charizard2', className: 'card-image', size: 'medium', alt: 'фото Чаризарда' },
    { type: 'charizard', className: 'hidden-card-image', size: 'medium', alt: 'фото крутого Чаризарда' }
  ]
  
  const name = {
    title: 'Charizard',
    subTitle: 'Flame pokemon'
  }
  
  const downloadText = 'Download CV'
  
  return `
    ${ResumeCard({
      ...props,
      className: 'poke-resume',
      getItems,
      images,
      name,
      downloadText,
      file: charizardResume
    })}
`
}

export default withHeader(Pokemon)














// import { get, ref } from 'delta'
//
// import withHeader from '../../hocs/withHeader'
//
// const Pokemon = props => {
//   let ipRef = ref()
//
//   props.useEffect(() => {
//     get('https://api.ipify.org/?format=json')
//       .then(({ip}) => {
//         ipRef().innerText = ip || 'error'
//       })
//   })
//
//   return `
//     <div>
//         <h1>Тут будет айпи)))</h1>
//         <h2 id=${ipRef()}>Loading...</h2>
//     </div>
//   `
// }
//
// export default withHeader(Pokemon)
