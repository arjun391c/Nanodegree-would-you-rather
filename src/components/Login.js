import React, { useState } from "react";
import { connect } from "react-redux";
import { handleLogin } from "../actions/auth";
import { Redirect } from 'react-router-dom'

function Login(props) {
  const [loggedUserId, setLoggedId] = useState("");

  const { users, dispatch, loggedState } = props;

  const { from } = props.location.state || { from: { pathname: "/" } };

  if (loggedState) {
    return <Redirect to={from} />;
  }

  return (
    <div>
      <div className="login-container">
        <div className="col login ">
          <div className="head center m-4">
            <h3>Login</h3>
            <p>Please login to poll</p>
          </div>
          <select
            className="row"
            value={loggedUserId}
            onChange={(e) => setLoggedId(e.target.value)}
          >
            <option value="" disabled>
              Select User
            </option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
          <button
            className="btn custom-btn btn-success w-25"
            disabled={!loggedUserId}
            onClick={() =>
              dispatch(handleLogin(loggedUserId))
            }
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps({ users, auth }) {
  return {
    users: Object.values(users).map((id) => id),
    loggedState: auth.loggedState,
  };
}

export default connect(mapStateToProps)(Login);
