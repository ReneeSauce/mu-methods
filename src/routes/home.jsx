import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../components";
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
  function handleClick() {
    setPrimaryAccount(); //set primary acct to user context
    setTsxs(); //set all transactions to transaction context

    navigate("/db");
  }
  function handleClickDashboard() {
    setPrimaryAccount(); //set primary acct to user context
    setTsxs(); //set all transactions to transaction context

    navigate("/dashboard");
  }
  /* --------------------------------- return --------------------------------- */
  return (
    <Layout
      className="mb-32px "
      body={
        <div className="bg-alpha d-flex flex-column align-items-center w-100 gap-20px">
          <h1>Home from Route</h1>
          <p>This is where auth flow ischecked </p>

          {/* <button className="w-100 p-20px" onClick={() => handleClick()}>
            Handle Click goto db
          </button> */}
          <button
            className="w-100 p-20px"
            onClick={() => handleClickDashboard()}
          >
            Click here to go to dashboard -pretend you are logged in
          </button>
        </div>
      }
    ></Layout>
  );
};
