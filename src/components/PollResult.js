import React from "react";

function PollResult({ question }) {
  const totalVotes =
    question.optionOne.votes.length + question.optionTwo.votes.length;

  let optionOneWidth = Math.round(
    (question.optionOne.votes.length / totalVotes) * 100
  );
  let optionTwoWidth = Math.round(
    (question.optionTwo.votes.length / totalVotes) * 100
  );

  return (
    <div>
      <div className="col-sm-12 ">
        <div>Results:</div>
        <div className="result-box">
          Would you rather {question.optionOne.text}?
          <div className="progress m-progress--sm">
            <div
              className="progress-bar m--bg-success"
              style={{ width: optionOneWidth + "%" }}
            ></div>
          </div>
          <div>
            <span>
              {question.optionOne.votes.length} out of {totalVotes} votes. (
              {optionTwoWidth}%)
            </span>
          </div>
        </div>
        <div className="result-box">
          Would you rather {question.optionTwo.text}?
          <div className="progress m-progress--sm">
            <div
              className="progress-bar m--bg-success"
              style={{ width: optionTwoWidth + "%" }}
            ></div>
          </div>
          <div>
            <span>
              {question.optionTwo.votes.length} out of {totalVotes} votes. (
              {optionTwoWidth}%)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PollResult;
