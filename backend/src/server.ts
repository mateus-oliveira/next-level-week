import express from 'express';

const app = express();

app.get('/', (req, res)=>{
    return res.json({'language': 'TypeScript'})
});

app.listen(3333);