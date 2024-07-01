import axios from 'axios';

const API_URL = 'http://localhost:3000/api/quizzes';

export const getAllQuizzes = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getQuizById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response;
};

export const createQuiz = async (quizData) => {
  const response = await axios.post(API_URL, quizData);
  return response;
};

export const updateQuiz = async (id, quizData) => {
  const response = await axios.put(`${API_URL}/${id}`, quizData);
  return response.data;
};

export const deleteQuiz = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};