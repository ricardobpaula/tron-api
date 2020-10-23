import express from 'express';

const app = express();

app.use(express.json());

app.get('/app',(req, res) => {
    const message = {message: 'Hello World! '}
    res.json(message);
}); 


export default app;