import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Button } from "../button/button";
import { Input } from "../input/input";
import Form from "./form";
/**
 * Form Component Storybook
 * @author [Jake Bohn](https://github.com/JakobOrion)
 * using example login form
 */
export default {
  title: "Components/Form",
  component: Form,
  parameters: {
    docs: {
      description: {
        component: "Form Component using react-hook-form and yup",
      },
    },
  },
  argTypes: {
    formName: {
      description: "Name of the form, sets the form's aria-label",
      control: {
        type: "text",
      },
    },
    onSubmit: {
      description: "Set's the form's onSubmit function",
      control: {
        type: "null",
      },
    },
  },
};

const Template = () => {
  const LoginSchema = yup.object().shape({
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .max(25, "Max password length is 25")
      .required("Password is required"),
  });

  const {
    formState: { errors },
  } = useForm({ resolver: yupResolver(LoginSchema) });

  /* For testing/demo purposes only */
  const onSubmit = (data) => {
    console.log({ data });
  };

  return (
    <Form formName="demo login form" onSubmit={onSubmit}>
      <Input
        name="email"
        id="email"
        placeholder="myemail@mumethods.com"
        label="Email"
        className="mb-3"
        error={errors.email?.message}
        type="email"
        required
      />
      <Input
        name="password"
        id="password"
        placeholder="password"
        label="Password"
        className="mb-3"
        error={errors.password?.message}
        type="password"
        required
      />
      <Button type="submit" buttonKind="primary" onClick={() => {}} size="lg">
        Login
      </Button>
    </Form>
  );
};

/* -------------------------------------------------------------------------- */
/*                       Example Login Form                                   */
/* -------------------------------------------------------------------------- */
export const FormComponent = Template.bind({});
FormComponent.args = {};
