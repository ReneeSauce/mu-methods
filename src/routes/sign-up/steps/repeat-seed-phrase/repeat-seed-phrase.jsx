import { useCallback, useContext, useEffect, useState } from "react";
import { Button, Layout } from "../../../../components"; //button needs to be changed when avail
import { Header } from "../../../../components/layout/header";
import { WizardContext } from "../../../../contexts/wizard-context";
import { Body } from "./body";
//TODO: Update buttons when available
//TODO: Check Font Weight on body - all other steps have 700 and this step in figma has 500
//TODOL consider auto focus to text area on pageload - having trouble since component mounts at signup
//TODO: set up error messaging on not a match
//TODO: check useEffect that clears on load - component mounts on signup route may not work without lazyloading

/**
 * Repeat Seed Phrase Component - 
 * @author [K. Ehrenclou](https://github.com/kehrenclou)
 * @param onBackClick back click handler prop passed down from parent
 * @param onForwardClick forward click handler prop passed down from parent
 * @param onClick prop to call handleBackClick function
 * @param state param to bring in all of WizardContext
 * @param WizardContext context for data in Sign up Wizard
 * @param repeatedseedPhrase  useState value containing copied seed phrase array - local not in context
 * @param setRepeatedSeedPhrases useState setter to set copied seed phrase array - local not in context
 * @param isMatch boolean useState value to return if repeated and original seed phrase array match
 * @param setIsMatch useState setter to set isMatch
 * @param onChange prop to call handleInputChange function
 * @param disabled prop using isMatch to enable/disable button
 * @param header expects header components
 * @param body expects body components
 * @param footer expects footer components

 */

export function RepeatSeedPhrase({ onBackClick, onForwardClick }) {
  /* ----------------------------- set up Context ----------------------------- */
  const { state } = useContext(WizardContext);
  const seedPhrases = state.seedPhrases.join(" ");

  /* -------------------------------- useState -------------------------------- */
  const [repeatedSeedPhrase, setRepeatedSeedPhrase] = useState("");
  const [isMatch, setIsMatch] = useState(false);

  /* -------------------------------- useEffect ------------------------------- */
  //clear on load -
  //this is to clear it if back button invoked and seeds changeand copy not done again
  useEffect(() => {
    setRepeatedSeedPhrase("");
    setIsMatch(false);
  }, []);

  //check seeds and copied seeds match
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
