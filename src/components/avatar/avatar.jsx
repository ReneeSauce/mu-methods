import { ThemeProvider } from "styled-components";
import styled from "styled-components";

/**
 * Avatar Component
 * @author [J. Hartsek](https://github.com/JHartsek)
 * @param shape expects 'round' or 'square'
 * @param src the image link
 * @param size expects 'xs', 'small', 'medium', or 'large'
 * @param alt the image description
 */

const Container = styled.img`
  height: ${(props) => props.size};
  width: ${(props) => props.size};
`;

export const Avatar = ({ shape, src, size, alt }) => {
  const sizes = {
    xs: "35px",
    small: "40px",
    medium: "50px",
    large: "60px",
  };

  return (
    <Container
      src={src}
      className={`overflow-hidden ${
        shape === "round" ? "rounded-circle" : "rounded"
      }`}
      alt={alt}
      size={sizes[size]}
    ></Container>
  );
};
