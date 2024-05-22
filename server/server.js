const express = require('express');
const db = require('./database');
const fileRoutes = require('./routes/fileRoutes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', fileRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
