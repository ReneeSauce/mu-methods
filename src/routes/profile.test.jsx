import { render, screen } from "@testing-library/react";
import { Profile } from "./profile";

describe("Route: Profile", () => {
  it("renders profile header", () => {
    render(
      <Profile
        src="https://images.unsplash.com/photo-1615361200141-f45040f367be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
        alt="sushi"
        name="Jugal Mu"
        pillText="0x6b...7776"
        isCopiable={true}
        email="emailexample@gmail.com"
        id="ID: JU1s32"
      />
    );
    expect(screen.getByAltText("sushi")).toBeInTheDocument();
    expect(screen.getByText("Jugal Mu")).toBeInTheDocument();
    expect(screen.getByText("0x6b...7776")).toBeInTheDocument();
    expect(screen.getByText("emailexample@gmail.com")).toBeInTheDocument();
    expect(screen.getByText("ID: JU1s32")).toBeInTheDocument();
  });
});
