import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

//components
import Dashboard from "./Dashboard";
import Nav from "./Nav";
import QuestionView from "./QuestionView";
import Leaderboard from "./Leaderboard";
import NewQuestion from "./NewQuestion";
import PageNotFound from "./PageNotFound";
import PrivateRoute from "./PrivateRoute";
import Login from "./Login";

//store
import { connect } from "react-redux";
import { fetchUsers } from "../actions/users";
import { fetchQuestions } from "../actions/questions";
import LoadingBar from "react-redux-loading";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchUsers());
    this.props.dispatch(fetchQuestions());
  }

  render() {
    const { loggedState } = this.props;

    return (
      <div className="container">
        <LoadingBar />

        {loggedState && <Nav />}
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute exact path="/questions/:id" component={QuestionView} />
          <PrivateRoute exact path="/leaderboard" component={Leaderboard} />
          <PrivateRoute exact path="/add" component={NewQuestion} />
          <Route exact path="/login" component={withRouter(Login)} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    loggedState: auth.loggedState,
  };
}

export default connect(mapStateToProps)(App);
