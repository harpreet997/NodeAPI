const express = require('express');
const app = express();
const productData = require('./data');
const users = require('./user');

app.get('/', (req, res) => {
    res.send(`
    <h1>Express Application for Api End Points</h1><br>
    <a href="/api/posts">Get All Posts</a>
    `)
})

app.get('/api/posts', (req, res) => {
    // res.status(200).send('Express Application')
    // res.json([{'name': "harpreet", 'age': 24}, {'name': 'dinesh', 'age': 24}])
    // res.writeHead(200, {'content-type': 'application/json'})
    const updateProduct = productData.map((product) => {
        const {id, title, price} = product
        return {id, title, price}
    })
    res.status(200).json(updateProduct)
})

app.get('/api/posts/:id', (req, res) => {
    const id = req.params.id
    const singleProduct = productData.find((product) => product.id === Number(id))
    res.json(singleProduct)   
})

app.get('/api/v1/query', (req, res) => {
    console.log(req.query)
    res.send('Hello World');
})

app.get('/about', (req, res) => {
    res.status(200).send('About Us screen')
})

app.get('/app/users', (req, res) => {
    res.status(200).json({success: true, data: users})
})

app.all('*', (req, res) => {
    res.status(404).send('404 page not found')
})


app.listen(5000, () => {
    console.log('Server is listening on port 5000... ');
})