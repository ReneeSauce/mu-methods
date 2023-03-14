import { createContext, useCallback, useMemo, useState } from "react";

/**
 * Auth Context - 
 * @author [K. Ehrenclou](https://github.com/kehrenclou)

 */

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  //state to store userProfile

  const [state, updateState] = useState({
    isLoggedIn: false, //set to false for default
    isNavVisible: false, //set to false for default
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
  const updateIsVisIsLogIn = useCallback(
    (value) => {
      updateState({
        ...state,
        isLoggedIn: value,
        isNavVisible: value,
      });
    },
    [state]
  );

  const store = useMemo(() => {
    return { state, updateIsNavVisible, updateIsLoggedIn, updateIsVisIsLogIn };
  }, [state, updateIsNavVisible, updateIsLoggedIn, updateIsVisIsLogIn]);

  return <AuthContext.Provider value={store}>{children}</AuthContext.Provider>;
};
