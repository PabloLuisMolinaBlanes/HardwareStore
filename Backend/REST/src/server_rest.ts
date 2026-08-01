import express from 'express'
import { authenticate_token, authenticate_username_password } from './auth/auth.js'
const app = express()
const port = 3000

app.get('/', async (req, res) => {
  const result = await authenticate_username_password("admin", "admin")
  res.send(result)
})

app.get('/token', async (req: any, res) => {
  const result = await authenticate_token(req.query.token)
  res.send(result)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})