const express = require('express')
// import express from 'express'

//const author = require('./package.json').repository.url
// import file from './package.json'

const port = 9000

const app = express()

app.get('/about-me', (peticion, respuesta) => {
    respuesta.json({
        name: 'Ivan Polanco',
        age: 24,
        country: 'Dominican Republic'
    })
})

app.delete('/about-me', (peticion, respuesta) => {
    respuesta.json({
        Empresas: ['Nintendo', 'Microsoft', 'Amazon']
    })
})

app.patch('/about-me', (peticion, respuesta) => {
    respuesta.json({
        hobbies: ['Leer', 'manga/anime', 'Boxeo']
    })
})


app.listen(port, () => {
    console.log(`Server started at port ${port}`);
})