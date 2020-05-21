import { addQuestionAnswer, addQuestion } from './questions'
import { addUserQuestionAnswer, addUserQuestion } from './users'
import { saveQuestion, saveQuestionAnswer } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export function postQuestionAnswer( authedUser, questionId, selectedOption ) {
    return (dispatch) => {
        dispatch(showLoading())

        saveQuestionAnswer({
            authedUser,
            qid: questionId,
            answer: selectedOption
        }).then(() => {
            dispatch(addQuestionAnswer(authedUser, questionId, selectedOption));
            dispatch(addUserQuestionAnswer(authedUser, questionId, selectedOption));
            dispatch(hideLoading());
        });
    }
}

export function postQuestion (author, optionOneText, optionTwoText, callback) {
    return (dispatch) => {
        dispatch(showLoading());

        saveQuestion({
            optionOneText,
            optionTwoText,
            author
        }).then((question) => {
            dispatch(addUserQuestion(question));
            dispatch(addQuestion(question));
            dispatch(hideLoading());
        }).then(callback);
    }
}