/**
 * Camera Component Testing
 * @author [Colburn Sanders](https://github.com/colburncodes)
 */

import { render } from "@testing-library/react";
import { QRCodeScanner } from "./qr-reader";

describe("QRCodeScanner", () => {
  it("renders qr code scanner component", () => {
    render(<QRCodeScanner />);
  });
});
