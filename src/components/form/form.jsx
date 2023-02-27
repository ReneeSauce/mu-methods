import { useForm } from "react-hook-form";

/**
 * Form Component using react-hook-form smart form compoment
 * to inject all react-hook-form methods into the child component
 * @author [Jake Bohn](https://github.com/JakobOrion)
 */

export default function Form({ defaultValues, children, onSubmit }) {
  const methods = useForm({ defaultValues });
  const { handleSubmit } = methods;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, (child) => {
        return child.props.name
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                register: methods.register,
                key: child.props.name,
              },
            })
          : child;
      })}
    </form>
  );
}
