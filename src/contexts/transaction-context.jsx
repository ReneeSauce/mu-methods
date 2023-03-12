import { createContext, useCallback, useMemo, useState } from "react";

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  //state to store userProfile

  const [state, updateState] = useState({
    allTransactions: [], //set on dashboard to populate account page
  });

  const updateAllTsxs = useCallback(
    (allTransactions) => {
      updateState({
        ...state,
        allTransactions: allTransactions,
      });
    },
    [state]
  );

  const store = useMemo(() => {
    return { state, updateAllTsxs };
  }, [state, updateAllTsxs]);

  return (
    <TransactionContext.Provider value={store}>
      {children}
    </TransactionContext.Provider>
  );
};
