import express from 'express'
import {artistArray} from "../../src/assets/database/artists.js"
import {songsArray} from "../../src/assets/database/songs.js"

const app = express()
const PORT = 3000

app.get('/', (request, response) => {
    response.send("Só vamos trabalhar comm os endpoints '/artists' e '/songs' ")
})

app.get('/artists', (request, response) => {
    response.send(artistArray)
})

app.get('/songs', (request, response) => {
    response.send(songsArray)
})

app.listen(PORT, () => {
    console.log(`Servidor está escutando na porta ${PORT}`)
})