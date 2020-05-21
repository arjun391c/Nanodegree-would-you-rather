import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Question extends Component {
    render() {
        const { avatar, name, optionOne, optionTwo, id } = this.props.question
        return (
            <div className='card'>
                <div className='card-header bold'>{name} asks would you rather...</div>
                <div className='card-body'>
                    <div className='container'>
                        <div className='row justify-content-center'>
                            <div className='col-sm-4 border-right center'>
                                <img src={avatar} alt={`Avatar of ${name}`} className='avatar'/>
                            </div>
                            <div className='col-sm-8'>
                                <div className='question-info center'>
                                    <p className='center'>{optionOne.text} <strong>OR</strong> {optionTwo.text}</p>
                                    <Link to={`questions/${id}`} className='center'>
                                        <button
                                            className='btn btn-outline-primary reset-vertical-margin '>
                                            View Poll
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Question