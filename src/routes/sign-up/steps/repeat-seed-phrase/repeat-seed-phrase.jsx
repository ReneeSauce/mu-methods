import { useCallback, useContext, useEffect, useState } from "react";
import { Button, Layout } from "../../../../components"; //button needs to be changed when avail
import { Header } from "../../../../components/layout/header";
import { WizardContext } from "../../sign-up";
import { Body } from "./body";
//TODO: Update buttons when available
//TODO: Check Font Weight on body - all other steps have 700 and this step in figma has 500
//TODO: write logic for pasted seed phrase to match seed phrase - logic done
//TODO: disable button until seed phrase matches- logic done
//TODOL consider auto focus to text area on pageload - having trouble since component mounts at signup
//TODO: set up error messaging on not a match

export function RepeatSeedPhrase({ onBackClick, onForwardClick }) {
  /* ----------------------------- set up Context ----------------------------- */
  const { state } = useContext(WizardContext);
  const seedPhrases = state.seedPhrases.join(" ");

  /* -------------------------------- useState -------------------------------- */
  const [repeatedSeedPhrase, setRepeatedSeedPhrase] = useState("");
  const [isMatch, setIsMatch] = useState(false);

  /* -------------------------------- useEffect ------------------------------- */
  //clear on load -
  //TODO: need to check this because component mounts on signup route
  //this is to clear it if back button invoked and seeds change
  //and copy not done again
  useEffect(() => {
    setRepeatedSeedPhrase("");
    setIsMatch(false);
  }, []);

  useEffect(() => {
    checkSeedPhrasesMatch();
  }, [repeatedSeedPhrase, seedPhrases]);
  /* -------------------------------- functions ------------------------------- */
  const checkSeedPhrasesMatch = () => {
    seedPhrases === repeatedSeedPhrase ? setIsMatch(true) : setIsMatch(false);

    //TODO: set up error messaging here
  };

  /* -------------------------------- handlers -------------------------------- */
  const handleInputChange = useCallback((e) => {
    setRepeatedSeedPhrase(e.target.value);
    checkSeedPhrasesMatch();
  });
  const handleBackClick = () => {
    setRepeatedSeedPhrase("");
    onBackClick();
  };

  /* --------------------------------- return --------------------------------- */
  return (
    <Layout
      className="mb-32px"
      header={
        <>
          <Header.Left>
            <Button onClick={handleBackClick}>**</Button>
          </Header.Left>
          <Header.Center>
            <Header.Title title="Sign up" />
            <Header.SubTitle subtitle=" Step 3/4" />
          </Header.Center>
        </>
      }
      body={
        <>
          <Body
            repeatedSeedPhrase={repeatedSeedPhrase}
            setRepeatedSeedPhrase={setRepeatedSeedPhrase}
            onChange={handleInputChange}
          ></Body>
        </>
      }
      footer={
        <Button onClick={onForwardClick} disabled={!isMatch}>
          Continue
        </Button>
      }
    ></Layout>
  );
}
