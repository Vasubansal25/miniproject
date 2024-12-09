const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs'); // Example for storing locally (use DB in production)
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

let clubRegistrations = []; // Example data store

app.post('/api/submitClub', (req, res) => {
    const clubData = req.body;

    // Validation can be added here
    if (!clubData.clubName || !clubData.presidentName) {
        return res.status(400).json({ message: 'Missing required fields.' });
    }

    clubRegistrations.push(clubData); // Push to in-memory array or DB
    res.status(200).json({ message: 'Club registration submitted successfully!' });
});

// Endpoint for fetching registrations (to show in deandash)
app.get('/api/getClubs', (req, res) => {
    res.json(clubRegistrations);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
