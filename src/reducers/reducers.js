

const initialState = {
    login: false,
    products : []
  };
  
  function rootReducer(state = initialState, action) {
    if (action.type === 'LOGIN_STAT') {
        state.login = true
    } else if(action.type === 'PROD_LIST') {
      console.log(state);
      state.products = action.payload
    } else if(action.type === 'ADD_PROD_LIST') {
      state.products.push(action.payload);
    }
    return state;
  };
  
  export default rootReducer;