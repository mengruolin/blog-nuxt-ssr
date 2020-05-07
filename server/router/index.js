import { scanDirModules } from '../untils'

export default function (app) {
  const scanResult = scanDirModules(__dirname, __filename)

  for (const prefix in scanResult) {
    if (scanResult.hasOwnProperty(prefix)) {
      app.use(prefix, scanResult[prefix])
    }
  }
}
