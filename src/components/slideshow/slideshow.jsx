import { Button } from "../button/button";

const SlideShow = () => {
  return (
    <div className="bg-alpha d-flex flex-column">
      <img
        className=""
        src="../../../public/mu-methods.svg"
        alt="Mu Methods Logo"
      />
      <img src="../../../public/cubes.svg" alt="Welcome Slide" />
      <h1 className="mx-auto"> Welcome to MU Methods </h1>
      <Button className="bg-alpha border-alpha"> Log In </Button>
      <Button className="text-alpha bg-primary"> Sign Up </Button>
      <Button className="bg-alpha border-white">
        Connect Existing Web3 wallet
      </Button>
    </div>
  );
};
export default SlideShow;
