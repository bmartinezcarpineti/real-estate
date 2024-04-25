const express = require('express');
const path = require('path');

const PORT = process.env.SERVER_PORT;
const server = express();

server.use(express.static(path.join(__dirname, 'dist')));

server.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'))
});

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}. Api is in ${process.env.VITE_API_URL}`)
})