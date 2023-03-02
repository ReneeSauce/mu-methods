import cx from "classnames";
import styled from "styled-components";

/**
 * Button Component
 * @author [Jenny Doctor](https://github.com/jendoc)
 * @param size expects 'sm', 'md', or 'lg'
 * @param kind expects 'primary', 'secondary', 'tertiary', or 'textOnly'
 * @param disabled expects boolean
 * @param danger expects boolean
 * @param leftIcon expects icon for left side of button
 * @param rightIcon expects icon expects icon for right side of button
 *
 * @param children expects button text content
 * @param onClick callback function to run when btn is clicked
 */

// TODO integrate icons when all are catalogued
// TODO update bg-opacity when theme color mapping done

export const Button = ({
  size,
  buttonKind,
  disabled,
  dangerText,
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

  const kinds = {
    primary: "bg-primary",
    primary_red: "bg-danger",
    secondary: "border border-white bg-transparent",
    tertiary: "bg-#f6f6f6", //bg-white 0.5 opacity
    textOnly: "bg-transparent text-white",
  };

  Button.Container = styled.button`
    border: none;
    border-radius: 8px;
    opacity: ${() => disabled && "0.5"};
    width: ${(props) => props.size};
    transition: opacity 0.2s;
    &:hover {
      opacity: ${() => !disabled && "0.8"};
    }
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
        `d-flex flex-row align-items-center justify-content-center ${kinds[buttonKind]}`
      )}
      role="button"
    >
      {leftIcon && (
        <Button.Icon
          src={leftIcon}
          className={(children && "me-12px") || "mx-8px"} // renders padding conditionally based on text content
          role="icon"
        />
      )}
      <Button.Text
        role="label"
        className={cx(
          `fs-18px ${
            (dangerText && "text-danger") ||
            (buttonKind === "primary" && "text-alpha") ||
            "text-white"
          }`
        )}
      >
        {children}
      </Button.Text>
      {rightIcon && (
        <Button.Icon
          src={rightIcon}
          className={(children && "ms-12px") || "mx-8px"} // renders padding conditionally based on text content
          role="icon"
        />
      )}
    </Button.Container>
  );
};
