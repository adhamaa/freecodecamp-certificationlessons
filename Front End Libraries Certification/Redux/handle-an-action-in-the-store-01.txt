const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // change code below this line
    return action.type === "LOGIN" ? {login: true} : state
  // change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};
