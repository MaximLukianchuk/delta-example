import { get } from 'delta'

import ResumeCard from '../ResumeCard'
import withHeader from '../../hocs/withHeader'
import charizardResume from '../../static/charizardResume.pdf'

import './Charizard.css'

const Charizard = props => {
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

export default withHeader(Charizard)
