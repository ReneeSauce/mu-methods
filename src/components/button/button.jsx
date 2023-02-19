import BS_Button from "react-bootstrap/Button";
import styled from "styled-components";

/**
 * Button Component
 * @author [Jenny Doctor](https://github.com/jendoc)
 * @param size expects 'sm', 'md', or 'lg'
 * @param color expects 'primary', 'positive', or 'negative'
 * @param kind expects 'PRIMARY', 'SECONDARY', or 'TERTIARY'
 * @param disabled expects boolean
 * @param loading expects boolean
 * @param active expects boolean
 * @param success expects boolean
 * @param danger expects boolean
 * @param leftIcon expects icon
 * @param righticon expects icon
 *
 * @param onClick callback function to run when btn is clicked
 */

// TODO integrate icons when all are catalogued

export const Button = ({
  size,
  color,
  kind,
  disabled,
  loading,
  active,
  success,
  danger,
  leftIcon,
  rightIcon,
  onClick,
  children,
}) => {
  Button.Icon = styled.img`
    src: ${icon};
  `;

  // TODO define sizes
  const sizes = {
    sm: "",
    md: "",
    lg: "",
  };

  // ? how to pass classNames as props?
  // ? or wrap component in styled-component?
  const colors = {
    primary: "",
    positive: "",
    negative: "",
  };

  // ? same as above
  const kinds = {
    PRIMARY: "",
    SECONDARY: "",
    TERTIARY: "",
  };

  if (loading) {
    return (
      <BS_Button
        size={sizes[size]}
        color={colors[color]}
        kind={kinds[kind]}
        disabled={disabled}
        success={success}
        danger={danger}
        onClick={onClick}
      >
        {loadingIcon}
      </BS_Button>
    );
  }

  return (
    <BS_Button
      size={sizes[size]}
      color={colors[color]}
      kind={kinds[kind]}
      disabled={disabled}
      success={success}
      danger={danger}
      onClick={onClick}
    >
      {leftIcon ? <Button.Icon icon={leftIcon} /> : null}
      {children}
      {rightIcon ? <Button.Icon icon={rightIcon} /> : null}
    </BS_Button>
  );
};
