import dotenv from 'dotenv';
import { app } from './app.js';

dotenv.config({path : './.env'})

const port = process.env.PORT || 9000;
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
})