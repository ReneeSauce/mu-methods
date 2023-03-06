import "bootstrap/dist/css/bootstrap.min.css";
import "../src/theme/defaults.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "bg-alpha",
    values: [
      {
        name: "bg-alpha",
        value: "#17172d",
      },
      {
        name: "bg-light",
        value: "#F8F8F8",
      },
      {
        name: "bg-dark",
        value: "#333",
      },
    ],
  },
};
