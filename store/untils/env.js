let baseURL = ''

if (process.env.NODE_ENV === 'development') {
  // console.log('env:' + 'development')
  baseURL = 'http://localhost:3000/api/'
}

if (process.env.NODE_ENV === 'production') {
  // console.log('env:' + 'production')
  baseURL = 'http://localhost:3000/api/'
}

export default { baseURL }
