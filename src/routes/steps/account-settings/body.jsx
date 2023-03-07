import { Button } from "../../../components";
/**
 * Body Component - used with Account-Settings Component-
 * @author [K. Ehrenclou](https://github.com/kehrenclou)

 *
 */

export const Body = ({ onDisconnectClick, onForwardClick }) => {
  /* -------------------------------- handlers -------------------------------- */

  /* --------------------------------- return --------------------------------- */
  return (
    <>
      <div className="w-100">
        <h3 className="fs-18px fw-bold mb-8px">Permissions</h3>
        <div className="d-flex flex-column gap-32px">
          <Button buttonKind="tertiary" onClick={onForwardClick}>
            Full
          </Button>
          <Button
            buttonKind="primary_red"
            size="lg"
            onClick={onDisconnectClick} //need onclick to wizard here
          >
            Disconnect account
          </Button>
        </div>
      </div>
    </>
  );
};
