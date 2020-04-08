import { cn } from 'delta'

import './Spinner.css'

const Spinner = ({ type }) => `
    <div class='${cn('spinner', `spinner-${type}`)}'></div>
`

export default Spinner
