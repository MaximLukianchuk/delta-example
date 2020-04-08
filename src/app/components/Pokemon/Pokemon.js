import { get, navigate } from 'delta'

import withAsync from '../../hocs/withAsync'
import ResumeCard from '../ResumeCard'
import withHeader from '../../hocs/withHeader'
import charizardResume from '../../static/charizardResume.pdf'

import './Pokemon.css'

const Pokemon = ({ id, ...props }) => {
  
  if (!id) {
    navigate('pokemon/1')
    return ''
  }
  
  const getItems = get(`https://pokeapi.co/api/v2/pokemon/${id}`)
  
  const images = [
    { type: 'whatIsThis', className: 'card-image', size: 'medium', alt: 'Это что за покемон?' },
    { type: 'whatIsThis', className: 'hidden-card-image', size: 'medium', alt: 'Это что за покемон?' }
  ]
  
  const name = {
    title: 'Это что за покемон?',
    subTitle: ''
  }
  
  const downloadText = 'Download CV'
  
  return `
    ${withAsync(ResumeCard({
    ...props,
    className: 'poke-resume',
    getItems,
    images,
    name,
    downloadText,
    file: charizardResume
  }))}
`
}

export default withHeader(Pokemon)
