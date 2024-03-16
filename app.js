import express from 'express';
import { json } from 'body-parser';

const app = express();
const PORT = 3000; // You can use any port number

// Middleware to parse JSON requests
app.use(json());

// Basic route for GET request
app.get('/', (req, res) => {
    res.send('Welcome to the Discussion Service API!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});