import React, {useState} from "react";
import { connect } from "react-redux";
import AddPoll from './AddPoll'
import PollResult from './PollResult'
import { formatQuestion } from "../utils/helpers";
import { postQuestionAnswer } from '../actions/shared'
import PageNotFound from './PageNotFound'

function QuestionView(props) {
  const [ answer, setAnswer ] = useState('')

  const handleSubmit = (e,id) =>{
      e.preventDefault()

      dispatch(postQuestionAnswer( user, id, answer ))

      setAnswer('')
  }

  if(props.idNotFound){
    return <PageNotFound/>
  }

  const { question, user, dispatch } = props;
  const { name, avatar, hasVoted } = question;

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
                      user={user}
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

function mapStateToProps({ users, questions, auth }, props) {
  const { id } = props.match.params;
  const { loggedUser } = auth;
  const idNotFound = true

  if( questions[id] === undefined){
    return {
      idNotFound
    }
  }

  return {
    question: formatQuestion(
      questions[id],
      users[questions[id].author],
      loggedUser.id
    ),
    user: loggedUser.id,
    idNotFound: false
  };
}

export default connect(mapStateToProps)(QuestionView);
