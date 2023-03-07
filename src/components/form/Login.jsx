import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Input } from "../input";
import Form from "./form";

/**
 * Login Form component using react-hook-form and yup for validation.
 * @author [Jake Bohn](https://github.com/JakobOrion)
 */

const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .max(32, "Max password length is 32")
    .required("Password is required"),
});

export default function LoginForm() {
  const {
    formState: { errors },
  } = useForm({ resolver: yupResolver(LoginSchema) });

  /* For testing/demo purposes only */
  const onSubmit = (data) => {
    console.log({ data });
  };

  return (
    <>
      <Form formName="Login Form" onSubmit={onSubmit}>
        <Input
          name="email"
          placeholder="myemail@mumethods.com"
          label="Email"
          className="mb-3"
          error={errors.email?.message}
          type="email"
          required
        />
        <Input
          name="password"
          placeholder="password"
          label="password"
          className="mb-3"
          error={errors.password?.message}
          type="password"
          required
        />
      </Form>
    </>
  );
}
