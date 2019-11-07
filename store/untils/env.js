let baseURL = ''

if (process.env.NODE_ENV === 'development') {
  console.log('env:' + 'development')
  baseURL = '/api'
}

if (process.env.NODE_ENV === 'production') {
  console.log('env:' + 'production')
  baseURL = '/api'
}

export default { baseURL }
