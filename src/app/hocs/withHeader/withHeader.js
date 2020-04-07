import Header from '../../components/Header'

import './withHeader.css'

const withHeader = baseComponent => props => `
    ${Header(props)}
    <div class="page-wrapper">
        ${baseComponent(props)}
    </div>
`

export default withHeader
