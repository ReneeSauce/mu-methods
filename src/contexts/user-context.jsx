import { createContext, useCallback, useMemo, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  //state to store userProfile
  // const [userProfile, setUserProfile] = useState({});
  const [state, updateState] = useState({
    userProfile: {},
  });

  const updateUserProfile = useCallback(
    (userProfile) => {
      updateState({
        ...state,
        userProfile,
      });
    },
    [state]
  );
  const store = useMemo(
    () => ({ state, updateUserProfile }),
    [state, updateUserProfile]
  );

  return (
    <UserContext.Provider value={store}>{props.children}</UserContext.Provider>
  );
};
