export const compose = (...functions) => arg => functions.reduceRight((a, v) => v(a), arg)
