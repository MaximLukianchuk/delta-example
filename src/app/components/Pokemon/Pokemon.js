import { get, navigate, ref, compose } from 'delta'

import ResumeCard from '../ResumeCard'
import Arrow from '../Arrow'
import withAsync from '../../hocs/withAsync'
import withHeader from '../../hocs/withHeader'
import withLocalStorage from '../../hocs/withLocalStorage';

import './Pokemon.css'

const ResumeCardAsync = withAsync(ResumeCard)

const Pokemon = ({ id, useEffect, ls, ...props }) => {
  
  if (!id || /[^0-9]/.test(id)) {
    navigate('pokemon/1')
    return ''
  }
  
  const leftArrowForwardedRef = ref()
  const rightArrowForwardedRef = ref()
  
  const clickLeft = () => {
    const prev = id > 1 ? parseInt(id) - 1 : 801
    navigate(`pokemon/${prev}`)
  }
  
  const clickRight = () => {
    const next = id < 801 ? parseInt(id) + 1 : 1
    navigate(`pokemon/${next}`)
  }
  
  const pressArrow = ({ which, keyCode }) => {
    const code = which || keyCode
    
    if (code === 37) {
      clickLeft()
    }
    
    if (code === 39) {
      clickRight()
    }
  }
  
  useEffect(() => {
    leftArrowForwardedRef().addEventListener('click', clickLeft)
    rightArrowForwardedRef().addEventListener('click', clickRight)
    document.addEventListener('keydown', pressArrow)
    
    return () => {
      leftArrowForwardedRef().removeEventListener('click', clickLeft)
      rightArrowForwardedRef().removeEventListener('click', clickRight)
      document.removeEventListener('keydown', pressArrow)
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
      id
    }
  
    for (const { ability: { url } } of abilities) {
      await get(url)
        .then(({ name, effect_entries: [{ short_effect }] }) => {
          resData.items.push({ property: name, value: short_effect })
        })
    }
    
    return resData
  }
  
  const pokeItems = ls.get('poke-items')
  const favourite = pokeItems ? pokeItems[id - 1].favourite : false
  
  return `
    ${ResumeCardAsync({
      ...props,
      className: 'poke-resume',
      asyncProps,
      patch,
      spinnerType: 'pokeball',
      favourite,
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

export default compose(
  withHeader,
  withLocalStorage
)(Pokemon)
