import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const port = parseInt(process.env.PORT || '3000');
app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});
