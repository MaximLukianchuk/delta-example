import { cn } from 'delta'

import './Star.css'

const Star = ({ className, ref, selected }) => `
    <div
        class='${cn('star', className, { selected })}'>
        ${ref ? `id='${ref()}'` : ''}
    </div>
`

export default Star
