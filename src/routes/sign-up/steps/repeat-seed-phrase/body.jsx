//body component for repeat-seed-phrase
import styled from "styled-components";

const StyledTextArea = styled.textarea`
  width: 100%;
  min-height: 180px;
  resize: none;
  outline: none;

  ::placeholder {
    color: white;
    opacity: 90;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;

export const Body = ({ repeatedSeedPhrase, onChange }) => {
  return (
    <>
      <h4 className="pb-12px m-0 text-white text-opacity-90 fs-18px text-center">
        Repeat your seed phrase to make sure you've saved it
      </h4>
      <label className="fs-12px lh-sm text-white text-opacity-90 h-100 square rounded w-100 bg-beta px-14px py-8px mb-12px ">
        {repeatedSeedPhrase && (
          <span className="">Enter your 12 word seed phrase</span>
        )}
        <StyledTextArea
          type="text"
          className="border-0 bg-beta fs-18px text-white text-opacity-0 lh-sm  d-flex flex-wrap justify-content-center gap-8px pt-8px"
          placeholder="Enter your 12 word seed phrase"
          value={repeatedSeedPhrase}
          onChange={onChange}
        ></StyledTextArea>
      </label>

      <p className="fs-14px fw-normal mt-auto text-center lh-sm mb-0">
        Write down your seed phrase in a secure place. If you loose it without
        setting up peers to restore it, you'll loose access to your account
        forever
      </p>
    </>
  );
};
