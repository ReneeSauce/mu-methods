import cx from "classnames";
import styled from "styled-components";

/**
 * Button Component
 * @author [Jenny Doctor](https://github.com/jendoc)
 * @param size expects 'sm', 'md', or 'lg'
 * @param bgColor expects 'primary', or 'danger'
 * @param kind expects 'PRIMARY', 'SECONDARY', or 'TERTIARY'
 * @param disabled expects boolean
 * @param danger expects boolean
 * @param leftIcon expects icon
 * @param rightIcon expects icon
 *
 * @param children expects button text content
 * @param onClick callback function to run when btn is clicked
 */

// TODO integrate icons when all are catalogued
// TODO add active styling for improved UX

// ! Implement kinds styling

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
    sm: "auto",
    md: "50%",
    lg: "100%",
  };

  Button.Container = styled.button`
    border: none;
    border-radius: 8px;
    opacity: ${() => disabled && "0.5"};
    width: ${(props) => props.size};
  `;

  Button.Icon = styled.img`
    height: 16px;
    width: 16px;
  `;

  Button.Text = styled.h3`
    margin: 19px 0px;
    font-weight: 700;
  `;

  return (
    <Button.Container
      disabled={disabled}
      onClick={onClick}
      size={sizes[size]}
      className={cx(
        `d-flex flex-row align-items-center justify-content-center bg-${bgColor}`
      )}
    >
      {leftIcon && (
        <Button.Icon
          src={leftIcon}
          className={(children && "me-3") || "ms-2 me-2"}
        />
      )}
      <Button.Text className={(danger && "text-danger fs-18px") || "fs-18px"}>
        {children}
      </Button.Text>
      {rightIcon && (
        <Button.Icon
          src={rightIcon}
          className={(children && "ms-3") || "ms-2 me-2"}
        />
      )}
    </Button.Container>
  );
};
