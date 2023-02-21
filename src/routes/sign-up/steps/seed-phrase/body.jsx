//body component for seed.jsx
import { Button } from "../../../../components";
export const Body = ({}) => {
  return (
    <>
      <h3 className="pb-12px m-0 fw-bold text-white text-opacity-90 fs-18px">
        Save your seed phrase
      </h3>
      <div className="pb-12px">placeholder for seed phrase form</div>
      <Button>Regenerate</Button>

      <p className="fs-14px fw-normal mt-auto text-center lh-sm mb-32px">
        Write down your seed phrase in a secure place. If you loose it without
        setting up peers to restore it, you'll loose access to your account
        forever
      </p>
      <div className=" d-flex gap-16px">
        <Button>Copy</Button>
        <Button>Download</Button>
      </div>
    </>
  );
};
