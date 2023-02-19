import styled from "styled-components";

/**
 * Button Component
 * @author [Jenny Doctor](https://github.com/jendoc)
 * @param size expects 'sm', 'md', or 'lg'
 * @param bgColor expects 'positive', or 'negative'
 * @param kind expects 'PRIMARY', 'SECONDARY', or 'TERTIARY'
 * @param disabled expects boolean
 * @param danger expects boolean
 * @param leftIcon expects icon
 * @param righticon expects icon
 *
 * @param children expects button text content
 * @param onClick callback function to run when btn is clicked
 */

// TODO integrate icons when all are catalogued
// TODO add active styling for improved UX

// ! Implement kinds styling
// ! Implement size styling

export const Button = ({
  size,
  bgColor,
  kind,
  disabled,
  danger,
  leftIcon,
  rightIcon,
  onClick,
  children,
}) => {
  const sizes = {
    sm: "object-fit",
    md: "50%",
    lg: "100%",
  };

  Button.Container = styled.button`
    background: ${(bgColor) => (bgColor.positive ? "#8cbaff" : "red")};
    border: none;
    border-radius: 8px;
    opacity: ${() => disabled && "0.5"};
    width: 100%;
  `;

  Button.Icon = styled.img`
    height: 16px;
    width: 16px;
  `;

  Button.Text = styled.h3`
    margin: 19px 0px;
    color: ${() => danger && "red"};
    font-weight: 700;
  `;

  return (
    <Button.Container
      disabled={disabled}
      onClick={onClick}
      bgColor={bgColor}
      className="d-flex flex-row align-items-center justify-content-center"
    >
      {leftIcon && <Button.Icon src={leftIcon} className="me-3" />}
      <Button.Text className="fs-18px">{children}</Button.Text>
      {rightIcon && <Button.Icon src={rightIcon} className="ms-3" />}
    </Button.Container>
  );
};
