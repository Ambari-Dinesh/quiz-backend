const app = require('./app');
const { createPool } = require('./utils/db');

const PORT = process.env.PORT || 3000;

// Initialize database connection
createPool();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});