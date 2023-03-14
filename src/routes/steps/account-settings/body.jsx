import { useContext, useEffect, useState } from "react";
import { Button } from "../../../components";
import { UserContext } from "../../../contexts/user-context";
/**
 * Body Component - used with Account-Settings Component-(Dashboard)
 * @author [K. Ehrenclou](https://github.com/kehrenclou)

 *
 */

export const Body = ({ onDisconnectClick, onForwardClick }) => {
  /* --------------------------------- consts --------------------------------- */
  const userCtx = useContext(UserContext);

  /* -------------------------------- useState -------------------------------- */
  const [permission, setPermission] = useState("");
  const [fullText, setFullText] = useState("");

  useEffect(() => {
    setPermission(userCtx.state.activePermission);
  }, []);

  useEffect(() => {
    //set Text for Button
    setFullText(convertText(permission));
  }, [permission]);

  /* -------------------------------- functions ------------------------------- */
  //convert permission abbreviation to full text
  function convertText(x) {
    if (x === "F") {
      return "Full";
    } else if (x === "L") {
      return "Limited";
    } else if (x === "R") {
      return "Read-only";
    }
  }
  /* --------------------------------- return --------------------------------- */
  return (
    <>
      <div className="w-100">
        <h3 className="fs-18px fw-bold mb-8px">Permissions</h3>
        <div className="d-flex flex-column gap-32px">
          <Button
            buttonKind="tertiary"
            rightIcon="arrowRight"
            className="py-8px px-16px justify-content-between"
            onClick={onForwardClick}
          >
            {fullText}
          </Button>
          <Button
            buttonKind="primary_red"
            size="lg"
            onClick={onDisconnectClick}
          >
            Disconnect account
          </Button>
        </div>
      </div>
    </>
  );
};
