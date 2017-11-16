const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (request, response) => response.send('Hi There'))

app.listen(PORT, () => console.log('Server is running on port ' + PORT))