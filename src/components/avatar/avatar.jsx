import { ThemeProvider } from "styled-components";
import styled from "styled-components";
/**
 * Avatar Component
 * @author [J. Hartsek](https://github.com/JHartsek)
 */

export const Avatar = ({ shape, src, size }) => {
  const sizes = {
    xs: "35px",
    small: "40px",
    medium: "50px",
    large: "60px",
  };

  const Container = styled.img`
    height: ${(props) => props.theme[size]};
    width: ${(props) => props.theme[size]};
  `;
  return (
    <ThemeProvider theme={sizes}>
      <Container
        src={src}
        className={`overflow-hidden ${
          shape === "round" ? "rounded-circle" : "rounded"
        }`}
      ></Container>
    </ThemeProvider>
  );
};
