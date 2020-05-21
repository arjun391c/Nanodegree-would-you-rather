import React, { Component } from 'react'
import { Route, Switch,Redirect } from 'react-router-dom'
import { history } from '../utils/helpers'

//components
import Dashboard from './Dashboard'
import Nav from './Nav'
import QuestionView from './QuestionView'
import Leaderboard from './Leaderboard'
import NewQuestion from './NewQuestion'
import PageNotFound from './PageNotFound'

//store
import { connect } from 'react-redux'
import { fetchUsers } from '../actions/users'
import { fetchQuestions } from '../actions/questions'
import LoadingBar from "react-redux-loading";
import Login from './Login'

class App extends Component {
  state={
    loggedUserId: '',
    loggedState: false
  }

  componentDidMount(){
    this.props.dispatch(fetchUsers())
    this.props.dispatch(fetchQuestions())
  }

  handleLogin = () => {
    this.setState({ loggedState: !this.stateloggedState })
    history.push("/");
  }
  handleLogout = () => {
    this.setState({ loggedState: !this.state.loggedState,
                    loggedUserId: ''
              })
    history.push("/login");
  }

  render() {
    const { users } = this.props
    const { loggedUserId, loggedState } = this.state

    return (
      <div className='container'>
        
        <LoadingBar/>
        { loggedState 
          ? <React.Fragment>
            
              <Nav loggedUserId={loggedUserId} logout={this.handleLogout}/>
              <Switch>      
                <Route exact path='/' render={() => <Dashboard loggedUserId={loggedUserId}/>}/>
                <Route exact path='/questions/:id' render={({match}) => <QuestionView loggedUserId={loggedUserId} match={match}/>}/>
                <Route exact path='/leaderboard' component={Leaderboard}/>
                <Route exact path='/add' render={() => <NewQuestion loggedUserId={loggedUserId}/>}/>
                <Route component={PageNotFound}/> 
              </Switch>
            </React.Fragment>
          : <Switch>
              <Redirect exact from="/" to="login" />
              <Route exact path='/login' render={() => <Login 
                            loggedUserId={loggedUserId}
                            setState={this.setState}
                            users={users}
                            handleLogin={this.handleLogin}
                            handleChange={(e) => this.setState({ loggedUserId: e.target.value })}
                          />}
              />
              <Route component={PageNotFound}/> 
            </Switch>
        }
      </div>
    )
  }
}

function mapStateToProps ({users}) {
  return {
    users: Object.values(users).map((id) =>id),
  }
}

export default connect(mapStateToProps)(App)
