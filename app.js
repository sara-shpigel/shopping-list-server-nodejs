const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

const cors = require('cors');
app.use(cors());

let orders = [];
let orderId = 0;

app.use(bodyParser.json());

app.post('/orders', (req, res) => {
  const { order } = req.body
  const orderObject = {  id: orderId++, name: order };
  orders.push(orderObject);
  res.status(201).json({ message: 'Order received successfully' });
});

app.get('/orders', (req, res) => {
  console.log(orders);
  res.json(orders);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
