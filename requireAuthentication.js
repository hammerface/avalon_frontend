import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Login from './Login'

export default (ChildComponent) => {
   class AuthenticatedComponent extends Component {
      static propTypes = {
         hasAuthToken: PropTypes.bool.isRequired
      };

      render () {
	  const { hasAuthToken } = this.props
	  return (hasAuthToken
		  ? <ChildComponent {...this.props} />
		  : <Login />
	  )
      }
   }

   const mapStateToProps = state => {
      return {hasAuthToken: state.loginStatus.isLoggedIn}
   }

   return connect(mapStateToProps)(AuthenticatedComponent)
}
