const express = require('express');
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');

const app = express();
const port = 3010;

app.use(cors());
app.use(express.json());
app.use('/api', productRoutes);

app.listen(port, () => {
  console.log('Service running...')
})