import dotenv from 'dotenv'

dotenv.config()

const Config = {
  port: process.env.PORT,
  db_url: process.env.MONGO_URL,
  jwt_secret: process.env.JWT_SECRET
}

export default Config