import FloatingLabel from "react-bootstrap/FloatingLabel";
import BS_FORM from "react-bootstrap/Form";
import styled from "styled-components";
/**
 * Form Input Components registers inputs into react-hook-form.
 * @author [Jake Bohn](https://github.com/JakobOrion)
 */
const StyledInput = styled(BS_FORM.Control)`
  border-color: var(--bs-beta);
  font-weight: 500;

  &:focus {
    border-color: var(--bs-primary);
    box-shadow: none;
  }
  &:invalid {
    box-shadow: none;
  }
  &:invalid:focus {
    box-shadow: none;
  }
`;

const StyledSelect = styled(BS_FORM.Select)`
  border-color: var(--bs-beta);
  font-weight: 500;

  &:focus {
    border-color: var(--bs-primary);
    box-shadow: none;
  }
  &:invalid {
    box-shadow: none;
  }
  &:invalid:focus {
    box-shadow: none;
  }
`;

export const Input = ({
  register,
  name,
  id,
  label,
  className,
  error,
  ...rest
}) => {
  return (
    <FloatingLabel controlId={id} label={label} className={className}>
      <StyledInput
        isInvalid={error}
        className="bg-beta text-white fs-18px text-opacity-90"
        {...register(name)}
        {...rest}
      />
      {error && (
        <BS_FORM.Control.Feedback type="invalid">
          {error}
        </BS_FORM.Control.Feedback>
      )}
    </FloatingLabel>
  );
};

export const Select = ({
  register,
  options,
  name,
  id,
  label,
  className,
  error,
  ...rest
}) => {
  return (
    <FloatingLabel controlId={id} label={label} className={className}>
      <StyledSelect
        className="bg-beta text-white fs-18px text-opacity-90"
        isInvalid={error}
        {...register(name)}
        {...rest}
      >
        {options.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </StyledSelect>
    </FloatingLabel>
  );
};
