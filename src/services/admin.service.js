import axios from 'axios';
import { authHeader, Header } from './apiHeader';

const API_URL = process.env.REACT_APP_API_ENDPOINT;
const GENERATE_QUESTION_URL = process.env.REACT_APP_API_GENERATE_QUESTION_BASE_URL;

class AdminService {
  generateQuestions(text) {
    const requestText = `generate <multiplechoice> <question> <answer> <choices>: <text> ${text}`;

    const data = {
      data: requestText,
      model: 'qgen-mlg',
    };
    return axios
      .post(`${GENERATE_QUESTION_URL}api/v1/generate_questions`, data, {
        headers: Header(),
      })
      .then((response) => response.data);
  }

  saveQuestions(questionData, userId) {
    questionData.user_id = userId;
    return axios
      .post(`${GENERATE_QUESTION_URL}api/v1/save_question`, questionData, { headers: Header() })
      .then((response) => response.data);
  }

  getQuestions() {
    return axios
      .get(`${GENERATE_QUESTION_URL}api/v1/get_questions?user_id=53`, {
        headers: Header(),
      })
      .then((response) => response.data);
  }

  deleteQuestion(questionId) {
    const data = {
      user_id: 53,
    };
    return axios
      .post(`${GENERATE_QUESTION_URL}api/v1/delete_question/${questionId}`, data, {
        headers: Header(),
      })
      .then((response) => response.data);
  }
}

export default new AdminService();
