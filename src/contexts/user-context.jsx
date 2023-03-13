import { createContext, useCallback, useMemo, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  //state to store userProfile

  const [state, updateState] = useState({
    activeFilter: "",
    primaryAcct: [], //set on dashboard to populate account page
    walletProfiles: [], //all acount profiles - set on home page
    activeWallet: [], //
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
  const updateActiveWallet = useCallback(
    (activeWallet) => {
      updateState({
        ...state,
        activeWallet: activeWallet,
        activeFilter: activeWallet.cryptoType,
      });
    },
    [state]
  );

  const store = useMemo(() => {
    return {
      state,
      updateActiveWallet,
      updateWalletProfiles,
      updateAllTsxs,
      updatePrimaryAcct,
    };
  }, [
    state,
    updateActiveWallet,
    updateWalletProfiles,
    updateAllTsxs,
    updatePrimaryAcct,
  ]);

  return <UserContext.Provider value={store}>{children}</UserContext.Provider>;
};
