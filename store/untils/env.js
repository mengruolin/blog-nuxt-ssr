import os from 'os'
let baseURL = ''

function getIPAdress () {
  const interfaces = os.networkInterfaces()
  let ip = ''
  Object.keys(interfaces).forEach((item) => {
    if (item) {
      interfaces[item].forEach((list) => {
        if (list.address !== '127.0.0.1' && list.family === 'IPv4') {
          ip = list.address
        }
      })
    }
  })

  return ip
}

if (process.env.PATH_TYPE === 'dev') {
  // console.log('env:' + 'development')
  baseURL = 'http://127.0.0.1:9002/api'
}

if (process.env.PATH_TYPE === 'test') {
  const ip = getIPAdress()
  // console.log('env:' + 'development')
  baseURL = `http://${ip}:9002/api`
}

if (process.env.PATH_TYPE === 'pro') {
  // console.log('env:' + 'production')
  baseURL = 'http://192.168.8.101:9002/api'
}

export default { baseURL }
