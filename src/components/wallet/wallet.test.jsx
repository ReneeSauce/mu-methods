import { render, screen } from "@testing-library/react";
import { Wallet } from "./wallet";

it("Renders wallet", () => {
  const props = {
    src: "https://images.unsplash.com/photo-1615361200141-f45040f367be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    alt: "salmon nigiri",
    wallet: "METAMASK",
    name: "MyMETAMASKAKK",
    pubkey: "1234",
  };
  render(
    <Wallet
      src={props.src}
      alt={props.alt}
      wallet={props.wallet}
      name={props.name}
      pubkey={props.pubkey}
    />
  );

  expect(screen.getByAltText("salmon nigiri")).toBeInTheDocument();
  expect(screen.getByText("METAMASK")).toBeInTheDocument();
  expect(screen.getByText("MyMETAMASKAKK")).toBeInTheDocument();
  expect(screen.getByText("1234")).toBeInTheDocument();
});
