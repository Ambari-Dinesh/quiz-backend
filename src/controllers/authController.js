const USERS = [
    { id: 1, username: 'teacher', password: 'password123' },
  ];
  
  const authenticate = (req, res) => {
    const { username, password } = req.body;
  
    const user = USERS.find(
      (u) => u.username === username && u.password === password
    );
  
    if (user) {
      res.json({ message: 'Login successful', user });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  };
  
  module.exports = { authenticate };