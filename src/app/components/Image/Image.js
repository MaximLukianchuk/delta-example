import { cn } from 'delta'

import * as images from './images'

import './Image.css'

const Image = ({ type, size, className, alt }) => `
    <img class='${cn(className, 'image', `image-${size}`)}' src=${images[type]} alt=${alt}>
`

export default Image
