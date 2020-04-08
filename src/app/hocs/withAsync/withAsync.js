import { ref } from 'delta'

import Spinner from '../../components/Spinner'

const withAsync = baseComponent => ({ asyncProps, patch, useEffect, ...props}) => {
  const containerRef = ref()
  
  useEffect(async () => {
    if (!asyncProps) return
    
    const asyncProps = await patch(await asyncProps)
    
    containerRef().innerHTML = baseComponent({...props, useEffect})
  })
  
  return `
    <div id='${containerRef()}'>
        ${Spinner({ type: 'pokeball' })}
    </div>
`
}

export default withAsync
