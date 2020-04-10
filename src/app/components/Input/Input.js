import { cn } from 'delta'

import './Input.css'

const Input = ({ placeholder, type, className, ref, disabled }) => `
    <input
        ${placeholder ? `placeholder='${placeholder}'` : ''}
        ${type ? `type='${type}'` : ''}
        ${ref ? `id='${ref()}'` : ''}
        class='${cn(className, 'input')}'
        ${disabled ? 'disabled' : ''}
    >
`

export default Input
