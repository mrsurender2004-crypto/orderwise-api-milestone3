const express = require('express');
const router = express.Router();
const { sql, poolPromise } = require('../db');  // ✅ correct import

// GET all orders for a specific customer
router.get('/customer/:customerId', async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('customerId', sql.Int, req.params.customerId)
      .query('SELECT * FROM orders WHERE user_id = @customerId');

    res.json({ orders: result.recordset });
  } catch (err) {
    res.status(500).json({ error: 'Error fetching orders', details: err.message });
  }
});

// GET specific order by ID
router.get('/:orderId', async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('orderId', sql.Int, req.params.orderId)
      .query('SELECT * FROM orders WHERE order_id = @orderId');

    if (result.recordset.length === 0) {
      return res.status(404).json({ error: 'Order not found' });
    }

    res.json(result.recordset[0]);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching order', details: err.message });
  }
});

module.exports = router;
