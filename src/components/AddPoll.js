import React from "react";

function AddPoll({ setAnswer, handleSubmit, question, answer }) {
  const { id, optionOne, optionTwo } = question;

  return (
    <form onSubmit={(e) => handleSubmit(e, id)}>
      <div className="form-check ">
        <input
          className='mr-3'
          type="radio"
          name="questionPoll"
          id="optionOne"
          value="optionOne"
          onChange={(e) => setAnswer(e.target.value)}
        />
        <label htmlFor="optionOne"><h5>{optionOne.text}</h5></label>
      </div>
      <div className="form-check mt-3">
        <input
          className='mr-3'
          type="radio"
          name="questionPoll"
          id="optionTwo"
          value="optionTwo"
          onChange={(e) => setAnswer(e.target.value)}
        />
        <label htmlFor="exampleRadios2"><h5>{optionTwo.text}</h5></label>
      </div>
      <div className='center'>
        <button
          className="btn btn-outline-primary mt-5"
          type="submit"
          disabled={!answer}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default AddPoll;
