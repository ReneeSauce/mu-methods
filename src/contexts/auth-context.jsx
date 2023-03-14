import { createContext, useCallback, useMemo, useState } from "react";

/**
 * Auth Context - 
 * @author [K. Ehrenclou](https://github.com/kehrenclou)

 */

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  //state to store userProfile

  const [state, updateState] = useState({
    isLoggedIn: false, //set to true for demo
    isNavVisible: true, //set to true for home page demo to get to notifications
  });

  const updateIsLoggedIn = useCallback(
    (isLoggedIn) => {
      updateState({
        ...state,
        isLoggedIn: isLoggedIn,
      });
    },
    [state]
  );
  const updateIsNavVisible = useCallback(
    (isNavVisible) => {
      updateState({
        ...state,
        isNavVisible: isNavVisible,
      });
    },
    [state]
  );

  const store = useMemo(() => {
    return { state, updateIsNavVisible, updateIsLoggedIn };
  }, [state, updateIsNavVisible, updateIsLoggedIn]);

  return <AuthContext.Provider value={store}>{children}</AuthContext.Provider>;
};
