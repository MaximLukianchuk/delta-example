import { get, navigate, ref } from 'delta'

import ResumeCard from '../ResumeCard'
import Arrow from '../Arrow'
import withAsync from '../../hocs/withAsync'
import withHeader from '../../hocs/withHeader'
import charizardResume from '../../static/charizardResume.pdf'

import './Pokemon.css'

const ResumeCardAsync = withAsync(ResumeCard)

const Pokemon = ({ id, useEffect, ...props }) => {
  
  if (!id) {
    navigate('pokemon/1')
    return ''
  }
  
  const leftArrowForwardedRef = ref()
  const rightArrowForwardedRef = ref()
  
  const swipeLeft = () => {
    const prev = id >= 0 ? parseInt(id) - 1 : 801
    navigate(`pokemon/${prev}`)
  }
  
  const swipeRight = () => {
    const next = id < 801 ? parseInt(id) + 1 : 1
    navigate(`pokemon/${next}`)
  }
  
  useEffect(() => {
    leftArrowForwardedRef().addEventListener('click', swipeLeft)
    rightArrowForwardedRef().addEventListener('click', swipeRight)
    
    return () => {
      leftArrowForwardedRef().removeEventListener('click', swipeLeft)
      rightArrowForwardedRef().removeEventListener('click', swipeRight)
    }
  })
  
  const asyncProps = get(`https://pokeapi.co/api/v2/pokemon/${id}`)
  
  const patch = async ({ name, abilities, sprites: { front_default, front_shiny } }) => {
    const resData = {
      name: {
        title: name,
        subTitle: ''
      },
      images: [
        { src: front_default, className: 'card-image', size: 'medium', alt: 'Это что за покемон?' },
        { src: front_shiny, className: 'hidden-card-image', size: 'medium', alt: 'Это что за покемон?' }
      ],
      items: [],
      downloadText: 'Download CV',
      file: charizardResume
    }
  
    for (const { ability: { url } } of abilities) {
      await get(url)
        .then(({ name, effect_entries: [{ short_effect }] }) => {
          resData.items.push({ property: name, value: short_effect })
        })
    }
    
    return resData
  }
  
  return `
    ${ResumeCardAsync({
      ...props,
      className: 'poke-resume',
      asyncProps,
      patch,
      useEffect
    })}
    ${Arrow({
      className: 'poke-slide-left',
      direction: 'left',
      size: 'big',
      ref: leftArrowForwardedRef
    })}
    ${Arrow({
      className: 'poke-slide-right',
      direction: 'right',
      size: 'big',
      ref: rightArrowForwardedRef
    })}
`
}

export default withHeader(Pokemon)
