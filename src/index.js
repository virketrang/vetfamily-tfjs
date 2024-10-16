const express = require('express')
const tfjs = require('@tensorflow/tfjs-node')

console.log('version', tfjs.version)

const app = express()
const PORT = 8000

app.get('/', (req, res) => {
	res.send('Server is running')
})
app.post('/about', (req, res) => {
	res.send('About route 🎉 ')
})

app.listen(PORT, () => {
	console.log(`✅ Server is running on port ${PORT}`)
})
