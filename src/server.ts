import mongoose from 'mongoose'
import app from './app'
import config from './config/index'

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    // console.log('🛢 database connected succcesfully')
    //listen
    app.listen(config.port, () => {
      // console.log(`application listening on port ${config.port}`)
    })
  } catch (err) {
    // console.log('failed to coonet in database', err)
  }
}
main()
