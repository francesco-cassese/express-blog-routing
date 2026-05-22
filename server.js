import express from 'express';

const app = express();

const SERVER_PORT = process.env.SERVER_PORT || 3000;

app.get('/', (request, response) => {
    response.send('Server startato correttamente')
})

app.listen(SERVER_PORT, (error) => {

    if (error) {
        console.log('Il server ha riscontrato dei problemi', error);
    } else {
        console.log('Server in ascolto sulla porta:', SERVER_PORT);

    }
})