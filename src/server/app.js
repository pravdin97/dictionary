import express from 'express'
import { join } from 'path'

const app = express()
const port = 3000

app.use('/static', express.static(join(__dirname, '../../public')))

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, '../../public', 'index.html'))
})

app.listen(port, () => console.log('Server started on port ' + port))