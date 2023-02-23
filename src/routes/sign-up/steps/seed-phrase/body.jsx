//body component for seed.jsx
import { useContext } from "react";
import { Button } from "../../../../components";
import { WizardContext } from "../../sign-up";

//TODO: Should Download button have an error popup?
//should value/text be handled by state
//TODO: copy to clipboard - should we use react-copy-to-clipboard library?
//currently writing from scratch
//TODO: how does body work with context in step?

export const Body = ({ text, setText }) => {
  //copy to clipboard function
  const context = useContext(WizardContext);
  const { seedPhrases } = context.state;
  // const [seedPhrases, setSeedPhrases] = useContext(WizardContext)
  const inputHandler = (event) => {
    //on input change want this function to update seedphrase sate/context
    setSeedPhrases(event.target.value);
    context.updateSeedPhrases;
  };
  const copy = async () => {
    await navigator.clipboard.writeText(text);
    alert(text);
  };
  //download to text function
  const downloadTextFile = () => {
    const element = document.createElement("a");
    const file = new Blob([document.getElementById("input").value], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <>
      <h3 className="pb-12px m-0 fw-bold text-white text-opacity-90 fs-18px">
        Save your seed phrase
      </h3>
      <input
        id="input"
        type="text"
        // what in the actual f am i supposed to do with value?!
        value={seedPhrases}
        onChange={inputHandler}
        className="mb-12px w-100"
      ></input>
      <Button>Regenerate</Button>

      <p className="fs-14px fw-normal mt-auto text-center lh-sm mb-32px">
        Write down your seed phrase in a secure place. If you loose it without
        setting up peers to restore it, you'll loose access to your account
        forever
      </p>
      <div className=" d-flex gap-16px">
        <Button onClick={copy}>Copy</Button>
        <Button onClick={downloadTextFile}>Download</Button>
      </div>
    </>
  );
};
