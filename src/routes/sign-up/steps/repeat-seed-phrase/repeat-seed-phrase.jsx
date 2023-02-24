import { useEffect, useState } from "react";
import { Button, Layout } from "../../../../components"; //button needs to be changed when avail
import { Header } from "../../../../components/layout/header";
import { Body } from "./body";
//TODO: Update buttons when available
//TODO: Check Font Weight on body - all other steps have 700 and this step in figma has 500
//TODO: write logic for pasted seed phrase to match seed phrase
//TODO: disable button until seed phrase matches

export function RepeatSeedPhrase({ onBackClick, onForwardClick }) {
  const [repeatedSeedPhrase, setRepeatedSeedPhrase] = useState("");

  useEffect(() => {
    setRepeatedSeedPhrase("");
  }, []);

  const handleInputChange = (e) => {
    setRepeatedSeedPhrase(e.target.value);
    console.log(repeatedSeedPhrase);
  };
  return (
    <Layout
      className="mb-32px"
      header={
        <>
          <Header.Left>
            <Button onClick={onBackClick}>**</Button>
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
      footer={<Button onClick={onForwardClick}>Continue</Button>} //replace buton with step button
    ></Layout>
  );
}
