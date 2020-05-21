import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

function Nav(props) {
    const { logout, username} = props
    
    return (
        <div className='nav'>
            <ul>
                <li><NavLink to='/' activeClassName='active'>Home</NavLink></li>
                <li><NavLink to='/add' activeClassName='active'>Create new poll</NavLink></li>
                <li><NavLink to='/leaderboard' activeClassName='active'>Leaderboard</NavLink></li>
                <span className='ml-auto'/>
                <li><b>Hello &nbsp;</b>{username}</li>
                <li><button onClick={logout} className='btn btn-outline-dark'>Logout</button></li>
            </ul>
        </div>
    )
}

function mapStateToProps({users}, {loggedUserId}) {
    return {
        username: users[loggedUserId].name
    }
}

export default  connect(mapStateToProps)(Nav)