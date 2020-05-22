import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleLogout } from '../actions/auth'

function Nav(props) {
    const { dispatch, username} = props
    
    return (
        <div className='nav'>
            <ul>
                <li><NavLink to='/' activeClassName='active'>Home</NavLink></li>
                <li><NavLink to='/add' activeClassName='active'>Create new poll</NavLink></li>
                <li><NavLink to='/leaderboard' activeClassName='active'>Leaderboard</NavLink></li>
                <span className='ml-auto'/>
                <li><b>Hello &nbsp;</b>{username}</li>
                <li><button onClick={() => dispatch(handleLogout())} className='btn btn-outline-dark'>Logout</button></li>
            </ul>
        </div>
    )
}

function mapStateToProps({auth}) {
    return {
        username: auth.loggedUser.name
    }
}

export default  connect(mapStateToProps)(Nav)