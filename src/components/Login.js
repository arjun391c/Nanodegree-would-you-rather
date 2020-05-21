import React from "react";

function Login({loggedUserId, handleChange, users, handleLogin }) {
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
            onChange={(e) => handleChange(e)}
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
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
