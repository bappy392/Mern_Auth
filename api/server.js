import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello1')
})

app.listen(3000);