const initialState = {
    authType: 'no_auth', // or client, courier
    userId: 0
}

export default (state = initialState, action) => {
    switch(action.type) {
        case "LOGIN_SUCCESS":
            return {
                ...state,
                userId: action.data.userId,
                authType: action.data.authType
            }
        case "LOGIN_OUT": 
            return {
                ...initialState
            }
        default: {
            return state;
        }
    }
}