import Add from "./add";
import Alert from "./alert";
import ArrowDown from "./arrowDown";
import ArrowLeft from "./arrowLeft";
import ArrowRight from "./arrowRight";
import Close from "./close";
import Copy from "./copy";
import Delete from "./delete";
import FMolecule from "./fMolecule";
import Home from "./home";
import Minus from "./minus";
import Mu from "./mu";
import Notification from "./notification";
import Profile from "./profile";
import Regenerate from "./regenerate";
import Settings from "./settings";

const Icon = (props) => {
  switch (props.name) {
    case "add":
      return <Add {...props} />;
    case "alert":
      return <Alert {...props} />;
    case "arrowDown":
      return <ArrowDown {...props} />;
    case "arrowLeft":
      return <ArrowLeft {...props} />;
    case "arrowRight":
      return <ArrowRight {...props} />;
    case "close":
      return <Close {...props} />;
    case "copy":
      return <Copy {...props} />;
    case "delete":
      return <Delete {...props} />;
    case "fMolecule":
      return <FMolecule {...props} />;
    case "home":
      return <Home {...props} />;
    case "minus":
      return <Minus {...props} />;
    case "mu":
      return <Mu {...props} />;
    case "notification":
      return <Notification {...props} />;
    case "profile":
      return <Profile {...props} />;
    case "regenerate":
      return <Regenerate {...props} />;
    case "settings":
      return <Settings {...props} />;
    default:
      return;
  }
};

export default Icon;
