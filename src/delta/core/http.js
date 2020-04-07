const sendRequest = (method, url) => fetch(url, {
  method
}).then(res => res.json())

export const get = url => sendRequest('GET', url)
