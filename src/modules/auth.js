const initialState = {
  userId: 0,
  userName: "",
  email: "",
  loggedInAt: null
}

const initialStateForTesting = {
  userId: 1, //test account
  userName: "test_account_123",
  email: "cross-tester@inbox.ru",
  loggedInAt: +new Date()
}

export default (state = initialStateForTesting, action) => {
  switch(action.type) {
    case "LOGIN_SUCCESS":
      const { id: userId, user_name: userName, email } = action.data;
      return {
        userId,
        userName,
        email,
        loggedInAt: +new Date()
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
