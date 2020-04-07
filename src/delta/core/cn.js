const handler = v => ({
  string: () => `${v} `,
  number: () => v ? `${v} ` : '',
  object: () => {
    if (Array.isArray(v)) {
      return cn(...v)
    } else {
      return Object.keys(v)
        .reduce((accum, value) => accum += v[value] ? `${value} ` : '', '')
    }
  },
  undefined: () => '',
  null: () => ''
})[typeof v]()

export const cn = (...args) => {
  let result = ''

  args.forEach(className => {
    result += handler(className)
  })

  return result.trim()
}
