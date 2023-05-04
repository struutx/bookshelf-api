import express, { Express } from 'express';

const app: Express = express();

const port: string = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Running in port ${port}`)
})