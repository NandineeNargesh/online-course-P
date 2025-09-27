const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const courseRoutes = require('./routes/courseRoutes');
const authRoutes = require('./routes/authRoutes');

connectDB();
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('API is running...'));

// This line is critical - it tells the server to use your auth routes
app.use('/api/auth', authRoutes); 
app.use('/api/courses', courseRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));