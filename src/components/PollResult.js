import React from "react";

function PollResult({ question, user }) {
  
  const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length;

  let optionOneWidth = Math.round(
    (question.optionOne.votes.length / totalVotes) * 100
  );
  let optionTwoWidth = Math.round(
    (question.optionTwo.votes.length / totalVotes) * 100
  );

  const marked = question.optionOne.votes.includes(user) 

  return (
    <div>
      <div className="col-sm-12">
        <div>Results:</div>
        <div className={`result-box ${ marked ? "marked-answer" : "" }`}>
          <strong>Would you rather {question.optionOne.text}?</strong>
          <div className="progress m-progress--sm">
            <div
              className="progress-bar bg-warning"
              style={{ width: optionOneWidth + "%" }}
            ></div>
          </div>
          <div>
            <span>
              <strong>{question.optionOne.votes.length}</strong> out of <strong>{totalVotes}</strong> votes. (
              <strong>{optionOneWidth}%</strong>)
            </span>
          </div>
        </div>
        <div className={`result-box ${ !marked ? "marked-answer" : "" }`}>
          <strong>Would you rather {question.optionTwo.text}?</strong>
          <div className="progress m-progress--sm">
            <div
              className="progress-bar bg-warning"
              style={{ width: optionTwoWidth + "%" }}
            ></div>
          </div>
          <div>
            <span>
              <strong>{question.optionTwo.votes.length}</strong> out of <strong>{totalVotes}</strong> votes. (
              <strong>{optionTwoWidth}%</strong>)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PollResult;
