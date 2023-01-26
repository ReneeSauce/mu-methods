import * as React from "react";
import { render, screen } from "@testing-library/react";
import { Notification } from "./notification";

/**
 * Notification Component Testing
 * @author [J. Hartsek](https://github.com/JHartsek)
 */

describe("Component: Notification", () => {
  const props = {
    src: "https://images.unsplash.com/photo-1615361200141-f45040f367be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    alt: "salmon nigiri",
    title: "Coinbase",
    summary: "Sign transaction for 0.008 ETH",
    status: "unread",
  };

  it("renders a notification that includes an avatar, title, and summary", () => {
    render(
      <Notification
        src={props.src}
        alt={props.alt}
        title={props.title}
        summary={props.summary}
        status={props.status}
      />
    );

    expect(screen.getByAltText("salmon nigiri")).toBeInTheDocument();
    expect(screen.getByText("Coinbase")).toBeInTheDocument();
    expect(
      screen.getByText("Sign transaction for 0.008 ETH")
    ).toBeInTheDocument();
  });
});
