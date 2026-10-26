const express = require('express');
const loggerMiddleware = require('./loggerMiddleware');

const app = express();
const PORT = 3000;

// Log incoming requests before processing the routes.
app.use(loggerMiddleware);

app.get('/', (req, res) => {
    res.send('Logger middleware is working!');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});