const express = require('express');
const app = express();
const cors = require('cors');

const customerRoutes = require('./routes/customers');
const orderRoutes = require('./routes/orders');

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/customers', customerRoutes);
app.use('/api/orders', orderRoutes);

// Your HTTP server starts here
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});
