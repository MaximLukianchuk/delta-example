import './Exception.css'

const Exception = ({ err }) => `
    <div class='exception-wrapper'>
        <span class='exception-text'>ERROR: ${err}</span>
    </div>
`

export default Exception
