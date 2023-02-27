/**
 * Form Input Components registers inputs into react-hook-form.
 * @author [Jake Bohn](https://github.com/JakobOrion)
 * may break these out into individual components for each input type
 */

export function Input({ register, name, ...rest }) {
  return <input {...register(name)} {...rest} />;
}

export function TextArea({ register, name, ...rest }) {
  return <textarea {...register(name)} {...rest}></textarea>;
}

export function Select({ register, options, name, ...rest }) {
  return (
    <select {...register(name)} {...rest}>
      {options.map((value) => (
        <option value={value}>{value}</option>
      ))}
    </select>
  );
}
