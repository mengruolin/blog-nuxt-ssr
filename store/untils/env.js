let baseApi = ''

if (process.env.NODE_ENV === 'development') {
  console.log('env:' + 'development')
  baseApi = '/'
}

if (process.env.NODE_ENV === 'production') {
  console.log('env:' + 'production')
  baseApi = '/api'
}

export default { baseApi }
