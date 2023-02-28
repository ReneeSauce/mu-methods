import FloatingLabel from "react-bootstrap/FloatingLabel";
import * as BS_FORM from "react-bootstrap/Form";

/**
 * Form Input Components registers inputs into react-hook-form.
 * @author [Jake Bohn](https://github.com/JakobOrion)
 */

export function Input({
  register,
  name,
  id,
  label,
  className,
  error,
  ...rest
}) {
  return (
    <FloatingLabel controlId={id} label={label} className={className}>
      <BS_FORM.Control {...register(name)} {...rest} isInvalid={error} />
      <BS_FORM.Control.Feedback type="invalid">
        {error}
      </BS_FORM.Control.Feedback>
    </FloatingLabel>
  );
}

export function Select({
  register,
  options,
  name,
  id,
  label,
  className,
  error,
  ...rest
}) {
  return (
    <FloatingLabel controlId={id} label={label} className={className}>
      <BS_FORM.Select {...register(name)} {...rest} isInvalid={error}>
        {options.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </BS_FORM.Select>
    </FloatingLabel>
  );
}
