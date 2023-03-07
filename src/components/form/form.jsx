import React from "react";

/**
 * Form Component using react-hook-form smart form compoment
 * to inject all react-hook-form methods into the child components
 * @author [Jake Bohn](https://github.com/JakobOrion)
 */

export default function Form({
  defaultValues,
  register,
  handleSubmit,
  formName,
  children,
  onSubmit,
  ...rest
}) {
  return (
    <form formName={formName} onSubmit={handleSubmit(onSubmit)} {...rest}>
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
