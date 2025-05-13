const express = require('express');
const app = express();
const pageRoutes = require('./routes/serviceRoutes');

app.use(express.json());
app.use('/pages', pageRoutes); // Adjust prefix as needed

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
