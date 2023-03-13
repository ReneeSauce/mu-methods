import cx from "classnames";
import styled from "styled-components";
import Icon from "../icons/icon";

/**
 * Button Component
 * @author [Jenny Doctor](https://github.com/jendoc)
 * @param size expects 'sm', 'md', or 'lg'
 * @param kind expects 'primary', 'secondary', 'tertiary', or 'textOnly'
 * @param disabled expects boolean
 * @param danger expects boolean
 * @param margin expects px value for text margin
 * @param leftIcon expects icon for left side of button
 * @param rightIcon expects icon expects icon for right side of button
 *
 * @param children expects button text content
 * @param onClick callback function to run when btn is clicked
 */

const StyledButton = styled.button`
  border: none;
  padding: 0px;
  border-radius: 8px;
  opacity: ${(props) => props.disabled && "0.5"};
  width: ${(props) => props.size};
  border-
  transition: opacity 0.2s;
  &:hover {
    opacity: ${(props) => !props.disabled && "0.8"};
    cursor: ${(props) => props.disabled && "default"};
  }
`;

const StyledText = styled.h3`
  margin: ${(props) => props.margin || "20px 0px"};
  font-weight: 700;
`;

export const Button = ({
  size,
  buttonKind,
  disabled,
  dangerText,
  leftIcon,
  rightIcon,
  onClick,
  children,
  className,
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
    tertiary: "bg-white bg-opacity-10",
    textOnly: "bg-transparent text-white",
  };

  const icons = {
    add: "add",
    alert: "alert",
    arrowDown: "arrowDown",
    arrowLeft: "arrowLeft",
    arrowRight: "arrowRight",
    copy: "copy",
    close: "close",
    delete: "delete",
    download: "download",
    fMolecule: "fMolecule",
    home: "home",
    minus: "minus",
    mu: "mu",
    notification: "notification",
    profile: "profile",
    regenerate: "regenerate",
    settings: "settings",
  };

  return (
    <StyledButton
      disabled={disabled}
      onClick={onClick}
      size={sizes[size]}
      className={cx(
        `d-flex flex-row align-items-center justify-content-center ${kinds[buttonKind]} `,
        className
      )}
      role="button"
    >
      {leftIcon && (
        <Icon
          testId="icon"
          name={icons[leftIcon]}
          className={(children && "me-12px") || "mx-8px my-8px"} // renders padding conditionally based on text content
        />
      )}
      <StyledText
        role="label"
        className={cx(
          `fs-18px ${
            (dangerText && "text-danger") ||
            (buttonKind === "primary" && "text-alpha") ||
            "text-white"
          } ${buttonKind === "tertiary" && "my-12px"}` //added by ke - temp solution-renders padding conditionally for puttons in seedphrase tertiary
        )}
      >
        {children}
      </StyledText>
      {rightIcon && (
        <Icon
          name={icons[rightIcon]}
          className={(children && "ms-12px") || "mx-8px my-8px"} // renders padding conditionally based on text content
        />
      )}
    </StyledButton>
  );
};
