export default function loginStatus(state = { isLoggedIn: false }, action) {
    switch (action.type) {
       case 'LOGIN':
	  console.log('login action')
	  state = {...state, isLoggedIn: true}
	  return state
       case 'LOGOUT':
	  console.log('logout action')
	  state = {...state, isLoggedIn: false}
	  return state
       default:
	  return state
    }
}
