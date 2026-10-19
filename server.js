const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Initial election categories and nominees dataset
let categories = [
    { 
        id: 1, 
        name: 'Best Head of Department', 
        nominees: [
            { name: 'David Miller', votes: 0 }, 
            { name: 'Sarah Connor', votes: 0 }
        ] 
    },
    { 
        id: 2, 
        name: 'Best Team Player', 
        nominees: [
            { name: 'James Cameron', votes: 0 }, 
            { name: 'Lisa Kudrow', votes: 0 }
        ] 
    }
];

// API endpoint to fetch categories & live tallies
app.get('/api/categories', (req, res) => {
    res.json(categories);
});

// Start the server (supports cloud platforms like Render via process.env.PORT)
app.listen(PORT, () => {
    console.log(`Server is running smoothly at http://localhost:${PORT}`);
});