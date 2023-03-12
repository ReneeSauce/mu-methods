import { useContext, useEffect, useState } from "react";
import { Layout } from "../../components";
import { UserContext } from "../../contexts/user-context";
import { walletProfiles } from "../../utils";
import { allTsxs } from "../../utils/faker-data";

//Todo:
export const Home = ({ onForwardClick }) => {
  /* --------------------------------- consts --------------------------------- */
  //set usercontext
  const { state, updatePrimaryAcct, updateWalletProfiles, updateAllTsxs } =
    useContext(UserContext);

  const { primary, setPrimary } = useState([]);
  // const user = state.walletProfiles.filter((x) => x.isPrimary === true);
  // console.log(user);
  /* -------------------------------- useEffect ------------------------------- */
  //set accoutProfiles to context

  //
  useEffect(() => {
    updateWalletProfiles(walletProfiles);
  }, []);

  //page load set this then clears it
  // useEffect(() => {
  //   updateAllTsxs(allTsxs);
  // }, []);

  /* -------------------------------- function -------------------------------- */
  function setWalletProfiles() {
    updateWalletProfiles(walletProfiles);
  }
  function setTsxs() {
    // const tsx = allTsxs.filter((x)=>x.i >=0);
    updateAllTsxs(allTsxs);
    console.log("update tsxs", state);
  }
  function setPrimaryAccount() {
    const user = state.walletProfiles.filter((x) => x.isPrimary === true);
    updatePrimaryAcct(user);
    console.log("updateprimary", state);
  }
  function handleClick() {
    // setWalletProfiles();
    setPrimaryAccount();
    // setTsxs();
  }
  /* --------------------------------- return --------------------------------- */
  return (
    <Layout
      className="mb-32px "
      body={
        <div className="bg-alpha d-flex flex-column align-items-center w-100 gap-20px">
          <h1>Home</h1>
          <p>This is where auth flow ischecked </p>
          <button className="w-100 p-20px" onClick={() => setPrimaryAccount()}>
            Setup Primary Account
          </button>
          <button className="w-100 p-20px" onClick={() => setTsxs()}>
            Setup Transactions
          </button>
          <button className="w-100 p-20px" onClick={() => handleClick()}>
            Handle Click
          </button>
          <button className="w-100 p-20px" onClick={onForwardClick}>
            continue
          </button>
        </div>
      }
    ></Layout>
  );
};
