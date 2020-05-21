import { getQuestions } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECIEVE_QUESTIONS = 'RECIEVE_QUESTIONS'
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER'
export const ADD_QUESTION = 'ADD_QUESTION'

export function recieveQuestions(questions){
    return {
        type: RECIEVE_QUESTIONS,
        questions
    }
}

export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function addQuestionAnswer(authedUser, questionId, selectedOption) {
    return {
        type: ADD_QUESTION_ANSWER,
        authedUser,
        questionId,
        selectedOption
    }
}

export function fetchQuestions() {
    return (dispatch) => {
        dispatch(showLoading())

        return  getQuestions()
                .then((questions) => dispatch(recieveQuestions(questions)))
                .then(() => dispatch(hideLoading()))
    }
}