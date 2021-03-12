import React from 'react';
// import { connect } from 'react-redux'
// import { doLogin } from './actions/login'

class Login extends React.Component {
    componentDidMount() {
	console.log('entered login')
	window.location.replace('http://localhost:5000/google')
//	this.props.doLogin()
    }
    
    render() {
	return (
	    <div>Login</div>
        )
    }
}

// const mapDispatchToProps = dispatch => ({
//     doLogin: () => dispatch(doLogin())
// })

// export default connect(null, mapDispatchToProps)(Login);

export default Login
