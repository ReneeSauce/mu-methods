import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../components";
import { AuthContext } from "../contexts/auth-context";
import { TransactionContext } from "../contexts/transaction-context";
import { UserContext } from "../contexts/user-context";
import { walletProfiles } from "../utils";
import { allTsxs } from "../utils/faker-data";

//Todo:
export const Home = () => {
  /* --------------------------------- consts --------------------------------- */
  //set usercontext, transaction context
  const userCtx = useContext(UserContext);
  const tsxCtx = useContext(TransactionContext);
  const authCtx = useContext(AuthContext);

  //set up navigation
  const navigate = useNavigate();
  /* -------------------------------- usestate -------------------------------- */

  /* -------------------------------- useEffect ------------------------------- */

  //set wallet profiles to user context
  useEffect(() => {
    userCtx.updateWalletProfiles(walletProfiles);
  }, []);

  /* -------------------------------- function -------------------------------- */

  //sets transactions in tsxcontext
  function setTsxs() {
    // const tsx = allTsxs.filter((x)=>x.i >=0);
    tsxCtx.updateAllTsxs(allTsxs);
  }
  //sets primary account in User context
  function setPrimaryAccount() {
    const user = userCtx.state.walletProfiles.filter(
      (x) => x.isPrimary === true
    );
    userCtx.updatePrimaryAcct(user);
  }
  function handleNotLoggedInClick() {
    authCtx.updateIsVisIsLogIn(false);
    navigate("/signup");
  }
  function handleIsLoggedInClick() {
    setPrimaryAccount(); //set primary acct to user context
    setTsxs(); //set all transactions to transaction context

    authCtx.updateIsVisIsLogIn(true);
    navigate("/dashboard");
  }
  /* --------------------------------- return --------------------------------- */
  return (
    <Layout
      className="mb-32px "
      body={
        <div className="bg-alpha d-flex flex-column text-center align-items-center w-100 gap-8px">
          <h1>Home Route</h1>
          <div className="mb-20px">
            <div>This page is to help simulate auth flow </div>
            <div>Protected Routes need to be set up</div>
            <div> settings on page load: isLoggedIn = false</div>
          </div>

          <div className="border p-8px d-flex flex-column align-items-start w-100 mb-16px">
            <li>Click here to simulate being Logged out</li>
            <li>redirects to /signup</li>
            <li> Loads auth context</li>
            <button
              className="w-100 py-16px px-32px mt-20px"
              onClick={() => handleNotLoggedInClick()}
            >
              Set isLoggedIn = False
            </button>
          </div>
          <div className="border p-8px d-flex flex-column align-items-start w-100">
            <li>Click here to simulate being Logged in</li>
            <li>redirects to /dashboard</li>
            <li> Loads user, transaction and auth context</li>
            <button
              className="w-100 py-16px px-32px mt-20px"
              onClick={() => handleIsLoggedInClick()}
            >
              Set isLoggedIn = True
            </button>
          </div>
          <p>
            you need to be logged in to see the navbar and get to notifications
          </p>
        </div>
      }
    ></Layout>
  );
};
