const { query } = require('../utils/db');

const createQuiz = async (req, res) => {
  const { title, description, teacher_id } = req.body;

  try {
    const result = await query(
      'INSERT INTO quizzes (title, description, teacher_id) VALUES (?, ?, ?)',
      [title, description, teacher_id]
    );
    res.status(201).json({ id: result.insertId, title, description });
  } catch (error) {
    console.error('Error creating quiz:', error); // Log the error
    res.status(500).json({ message: 'Failed to create quiz' });
  }
};




const getQuizzes = async (req, res) => {
  try {
    const quizzes = await query('SELECT * FROM quizzes WHERE teacher_id = ?', [1]);
    res.json(quizzes);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch quizzes' });
  }
};

const getQuizById = async (req, res) => {
  const { id } = req.params;

  try {
    const [quiz] = await query('SELECT * FROM quizzes WHERE id = ?', [id]);
    res.json(quiz || {});
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch quiz' });
  }
};

const updateQuiz = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  try {
    await query('UPDATE quizzes SET title = ?, description = ? WHERE id = ?', [
      title,
      description,
      id,
    ]);
    res.json({ message: 'Quiz updated' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update quiz' });
  }
};

const deleteQuiz = async (req, res) => {
  const { id } = req.params;

  try {
    await query('DELETE FROM quizzes WHERE id = ?', [id]);
    res.json({ message: 'Quiz deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete quiz' });
  }
};

module.exports = {
  createQuiz,
  getQuizzes,
  getQuizById,
  updateQuiz,
  deleteQuiz,
};