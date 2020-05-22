import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, loggedState, ...rest }) => {
    
    return (<Route
        {...rest}
        render={(props) => (
             loggedState
            ? <Component {...props} />
            : <Redirect to={{pathname: '/login', state: { from: rest.location.pathname }}}/>
        )}
    />)
}

function mapStateToProps({auth}) {
    return {
        loggedState: auth.loggedState
    }
}

export default connect(mapStateToProps)(PrivateRoute)