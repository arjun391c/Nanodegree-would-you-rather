import React, { Component } from 'react'
import Question from './Question'

import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'

class Dashboard extends Component {
    state={
        answeredView : false
    }

    handleView = () =>{
        this.setState({answeredView: !this.state.answeredView})
    }

    render() {
        const { answeredView } = this.state
        const { questions } = this.props
        const questionsView = questions.filter((q) => q.hasVoted === answeredView)
       
        return (
            <div >
                <div className='view-btn'>
                    <button onClick={this.handleView} 
                            className='btn custom-btn btn-success' 
                            disabled={!answeredView}>
                            Unanswered
                    </button>
                    <button onClick={this.handleView} 
                            className='btn custom-btn btn-success' 
                            disabled={answeredView}>
                            Answered
                    </button>
                </div>
                <div className='view-container '>
                    <ul >
                        {questionsView.map((q) => <Question 
                                                    key={q.id}
                                                    question={q}  
                                                />
                        )}
                    </ul>
                </div>               
            </div>
        )
    }
}

function mapStateToProps ({ questions, users, auth }) {
   
    const loggedUser = auth.loggedUser
    const newquestion = Object.values(questions).map((question) => 
        formatQuestion( question,users[question.author],loggedUser.id )
    ) 
    return {
        loggedUser: loggedUser,
        questions:  newquestion.sort((a,b) => b.timestamp - a.timestamp)
    }
} 

export default connect(mapStateToProps)(Dashboard)
