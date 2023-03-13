import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../components";
import { UserContext } from "../contexts/user-context";
import { walletProfiles } from "../utils";
import { allTsxs } from "../utils/faker-data";

//Todo:
export const Home = () => {
  /* --------------------------------- consts --------------------------------- */
  //set usercontext
  const { state, updatePrimaryAcct, updateWalletProfiles, updateAllTsxs } =
    useContext(UserContext);

  const navigate = useNavigate();
  /* -------------------------------- usestate -------------------------------- */

  const { primary, setPrimary } = useState([]);
  // const user = state.walletProfiles.filter((x) => x.isPrimary === true);
  // console.log(user);
  /* -------------------------------- useEffect ------------------------------- */
  //set accoutProfiles to context

  useEffect(() => {
    updateWalletProfiles(walletProfiles);
  }, []);
  // useEffect(() => {
  //   updateAllTsxs(allTsxs);
  // }, []);

  /* -------------------------------- function -------------------------------- */
  function setWalletProfiles() {
    updateWalletProfiles(walletProfiles);
  }
  //sets transactions in context
  function setTsxs() {
    // const tsx = allTsxs.filter((x)=>x.i >=0);
    updateAllTsxs(allTsxs);
  }
  //sets primary account in context
  function setPrimaryAccount() {
    const user = state.walletProfiles.filter((x) => x.isPrimary === true);
    updatePrimaryAcct(user);
  }
  function handleClick() {
    // setWalletProfiles();
    setPrimaryAccount();
    // setTsxs();
    // setPrimary(state.primaryAcct);
    // console.log(state.primaryAcct);
    navigate("/db");
  }
  /* --------------------------------- return --------------------------------- */
  return (
    <Layout
      className="mb-32px "
      body={
        <div className="bg-alpha d-flex flex-column align-items-center w-100 gap-20px">
          <h1>Home from Route</h1>
          <p>This is where auth flow ischecked </p>
          <button className="w-100 p-20px" onClick={() => setPrimaryAccount()}>
            Setup Primary Account
          </button>
          <button className="w-100 p-20px" onClick={() => setTsxs()}>
            Setup Transactions
          </button>
          <button className="w-100 p-20px" onClick={() => handleClick()}>
            Handle Click goto db
          </button>
        </div>
      }
    ></Layout>
  );
};
