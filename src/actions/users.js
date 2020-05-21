import { getUsers } from "../utils/api"
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECIEVE_USERS = "RECIEVE_USERS"
export const ADD_USER_QUESTION_ANSWER = 'ADD_USER_QUESTION_ANSWER'
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION'

export function recieveUsers(users) {
  return {
    type: RECIEVE_USERS,
    users,
  };
}

export function addUserQuestion(question) {
  return {
      type: ADD_USER_QUESTION,
      question
  }
}

export function addUserQuestionAnswer(authedUser, questionId, selectedOption) {
  return {
      type: ADD_USER_QUESTION_ANSWER,
      authedUser,
      questionId,
      selectedOption
  }
}

export function fetchUsers() {
    return (dispatch) => {
      dispatch(showLoading())

      return  getUsers()
              .then((questions) => dispatch(recieveUsers(questions)))
              .then(() => dispatch(hideLoading()))
    }
}