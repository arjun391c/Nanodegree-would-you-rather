import React, {useState} from "react";
import { connect } from "react-redux";
import AddPoll from './AddPoll'
import PollResult from './PollResult'
import { formatQuestion } from "../utils/helpers";
import { postQuestionAnswer } from '../actions/shared'

function QuestionView(props) {
  const [ answer, setAnswer ] = useState('')
  
  const { question, user, dispatch } = props;
  const { name, avatar, hasVoted } = question;

  const handleSubmit = (e,id) =>{
      e.preventDefault()

      dispatch(postQuestionAnswer( user, id, answer ))

      setAnswer('')
  }


  return (
    <div className="card">
      <div className="card-header bold">{name} asks would you rather...</div>
      <div className="card-body">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-4 border-right center">
              <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
            </div>
            <div className="col-sm-8">
              <div className="question-info">
                {
                  !hasVoted
                  ? <AddPoll
                      handleSubmit={handleSubmit}
                      setAnswer={setAnswer}
                      question={question}
                      answer={answer}
                    />
                  : <PollResult
                      question={question}
                    />
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps({ users, questions }, props) {
  const { id } = props.match.params;
  const { loggedUserId } = props;
  return {
    question: formatQuestion(
      questions[id],
      users[questions[id].author],
      loggedUserId
    ),
    user: loggedUserId,
  };
}

export default connect(mapStateToProps)(QuestionView);
