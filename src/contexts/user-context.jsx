import { createContext, useCallback, useMemo, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  //state to store userProfile

  const [state, updateState] = useState({
    primaryAcct: [], //set on dashboard to populate account page
    walletProfiles: [], //all acount profiles - set on home page
    activeProfile: [], //
    allTransactions: [], //set on dashboard to populate account page
  });

  const updatePrimaryAcct = useCallback(
    (primaryAcct) => {
      updateState({
        ...state,
        primaryAcct: primaryAcct,
      });
    },
    [state]
  );
  const updateWalletProfiles = useCallback(
    (walletProfiles) => {
      updateState({
        ...state,
        walletProfiles: walletProfiles,
      });
    },
    [state]
  );
  const updateAllTsxs = useCallback(
    (allTransactions) => {
      updateState({
        ...state,
        allTransactions: allTransactions,
      });
    },
    [state]
  );
  const updateActiveProfile = useCallback(
    (activeProfile) => {
      updateState({
        ...state,
        activeProfile,
      });
    },
    [state]
  );

  const store = useMemo(() => {
    return { state, updatePrimaryAcct, updateWalletProfiles, updateAllTsxs };
  }, [state, updatePrimaryAcct, updateWalletProfiles, updateAllTsxs]);

  return <UserContext.Provider value={store}>{children}</UserContext.Provider>;
};
