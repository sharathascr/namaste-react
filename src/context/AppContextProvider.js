const { createContext, useState, useReducer } = require("react");

export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const initialState = {
    isLoggedIn: false,
    loggedInUser: null,
    cart: [],
  };
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_LOGGEDIN_USER":
        return { ...state, loggedInUser: action.payload };
      case "SET_LOGGEDIN_STATUS":
        return { ...state, isLoggedIn: action.payload };
      case "MODIFY_CART":
        break;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ appState: state, appDispatch: dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
