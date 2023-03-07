import React from "react";
import { useForm } from "react-hook-form";
/**
 * Form Component using react-hook-form smart form compoment
 * to inject all react-hook-form methods into the child components
 * @author [Jake Bohn](https://github.com/JakobOrion)
 */

export default function Form({
  defaultValues,
  formName,
  children,
  onSubmit,
  ...rest
}) {
  const { handleSubmit, register } = useForm({ defaultValues });

  return (
    <form aria-label={formName} onSubmit={handleSubmit(onSubmit)} {...rest}>
      {Array.isArray(children)
        ? children.map((child) => {
            return child.props.name
              ? React.createElement(child.type, {
                  ...{
                    ...child.props,
                    register,
                    key: child.props.name,
                  },
                })
              : child;
          })
        : children}
    </form>
  );
}
