import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Hello from server</h1>')
})

const port = process.env.TEST_PORT || 8080
app.listen(port, () => console.log(`Server listening on port ${port}`))