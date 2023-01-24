import { ThemeProvider } from "styled-components";
import styled from "styled-components";

/**
 * Avatar Component
 * @author [J. Hartsek](https://github.com/JHartsek)
 */

const Container = styled.img`
  height: ${(props) => props.theme[props.size]};
  width: ${(props) => props.theme[props.size]};
`;

export const Avatar = ({ shape, src, size, alt }) => {
  const sizes = {
    xs: "35px",
    small: "40px",
    medium: "50px",
    large: "60px",
  };

  return (
    <ThemeProvider theme={sizes}>
      <Container
        src={src}
        className={`overflow-hidden ${
          shape === "round" ? "rounded-circle" : "rounded"
        }`}
        alt={alt}
        size={size}
      ></Container>
    </ThemeProvider>
  );
};
