import { render, screen } from "@testing-library/react";
import { Peer } from "./peer";

/**
 * @author [Kurtney J.](https://github.com/xhundo)
 */

describe("Component: Peer", async () => {
  it("Renders peer component", () => {
    render(<Peer />);
    expect(screen.getByRole("container")).toBeInTheDocument();
  });

  it("Renders peer heading", () => {
    render(<Peer.Header>Chosen Peers</Peer.Header>);
    expect(screen.getByText("Chosen Peers")).toBeInTheDocument();
  });

  it("Renders peer cell", () => {
    render(<Peer.Cell />);
    expect(screen.getByRole("cell")).toBeInTheDocument();
  });

  it("Renders peer name", async () => {
    render(<Peer.Cell peer={`Peer`} />);
    const name = await screen.getByText("Peer");
    expect(name).toBeInTheDocument();
  });

  it("Renders peer cell with avatar", async () => {
    render(
      <Peer.Cell
        src="https://cdn.epicstream.com/images/ncavvykf/epicstream/f51726836cd5a23437a8439bd35c3eecf3ee48c8-800x400.png?rect=45,0,711,400&w=700&h=394&dpr=2"
        alt="peer"
        shape="round"
      />
    );
    const peer = await screen.getByAltText("peer");
    expect(peer).toBeInTheDocument();
  });

  it("Renders peer cell with button", async () => {
    render(<Peer.Cell />);
    const button = await screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
