import { ref } from 'delta'

import Spinner from '../../components/Spinner'
import Exception from '../../components/Exception'

const withAsync = baseComponent => ({ asyncProps, patch, spinnerType, useEffect, ...props}) => {
  const containerRef = ref()
  
  useEffect(async () => {
    if (!asyncProps) return
    
    try {
      const data = await patch(await asyncProps)
  
      setTimeout(() => containerRef() && (containerRef().innerHTML = baseComponent({...props, useEffect, ...data})), 1000)
    } catch (err) {
      containerRef().innerHTML = Exception({ err })
      throw Error('BAD REQUEST: ' + err)
    }
  })
  
  return `
    <div id='${containerRef()}'>
        ${Spinner({ type: spinnerType })}
    </div>
`
}

export default withAsync
