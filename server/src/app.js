const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(cors())
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/status', (req, res) => {
	res.send('Hello World!')
})

const PORT = process.env.PORT || 8081
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})