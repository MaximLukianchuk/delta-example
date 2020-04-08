import { cn } from 'delta'

import './Arrow.css'

const Arrow = ({ direction, size, className, ref }) => `
    <div ${ref ? `id='${ref()}'` : ''} class='${cn(className, 'arrow', `arrow-${direction}`, size)}'></div>
`

export default Arrow
