import { render } from "@testing-library/react";
import { QRCodeScanner } from "./qr-reader";

/**
 * Camera Component Testing
 * @author [Colburn Sanders](https://github.com/colburncodes)
 */

describe("QRCodeScanner", () => {
  it("renders qr code scanner component", () => {
    render(<QRCodeScanner />);
  });
});
