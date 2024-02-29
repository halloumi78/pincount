const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

app.get('/getShareCount', async (req, res) => {
    const url = req.query.url;
    try {
        const response = await fetch(`https://api.pinterest.com/v1/urls/count.json?&url=${url}`);
        const data = await response.json();
        res.json({ count: data.count });
    } catch (error) {
        console.error('Error fetching Pinterest share count:', error);
        res.status(500).json({ error: 'Failed to fetch share count' });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
