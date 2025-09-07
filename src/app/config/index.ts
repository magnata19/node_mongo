import dotenv from 'dotenv'

dotenv.config()

const Config = {
  port: process.env.PORT,
  db_url: process.env.MONGO_URL
}

export default Config