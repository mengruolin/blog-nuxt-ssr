let baseURL = ''

if (process.env.NODE_ENV === 'development') {
  // console.log('env:' + 'development')
  baseURL = 'http://192.168.8.101:9002/api'
}

if (process.env.NODE_ENV === 'production') {
  // console.log('env:' + 'production')
  baseURL = 'http://192.168.8.101:9002/api'
}

export default { baseURL }
