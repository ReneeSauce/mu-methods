import { createContext, useCallback, useMemo, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  //state to store userProfile

  const [state, updateState] = useState({
    primaryAcct: [], //set on dashboard to determine filters on dashboard
    walletProfiles: [], //all acount profiles - set on home page
    activeWallet: [], //active wallet on account page
    activeFilter: "", //used on account page to filter transactions based on activewallet
    activePermission: "", //used on account setting page for permissions base on active wallet
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

  const updateActiveWallet = useCallback(
    (activeWallet) => {
      updateState({
        ...state,
        activeWallet: activeWallet,
        activeFilter: activeWallet.cryptoType,
        activePermission: activeWallet.permissions,
      });
    },
    [state]
  );

  const store = useMemo(() => {
    return {
      state,
      updateActiveWallet,
      updateWalletProfiles,
      updatePrimaryAcct,
    };
  }, [state, updateActiveWallet, updateWalletProfiles, updatePrimaryAcct]);

  return <UserContext.Provider value={store}>{children}</UserContext.Provider>;
};
