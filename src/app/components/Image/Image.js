import { cn } from 'delta'

import * as images from './images'

import './Image.css'

const Image = ({ type, size, className, alt, src }) => `
    <img class='${cn(className, 'image', `image-${size}`)}' src=${src || images[type]} alt=${alt}>
`

export default Image
