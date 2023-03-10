import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Button, Form, Input, Select } from "../../components";

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
        component:
          "Form Component using react-hook-form and yup. Subcomponents: Input, Select. (Input also used for textarea, Radio coming soon.)",
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
        type: "object",
      },
    },
    name: {
      description: "Input parameter, sets the input's name attribute",
      control: {
        type: "text",
      },
    },
    id: {
      description: "Input parameter, sets the input's id attribute",
      control: {
        type: "text",
      },
    },
    placeholder: {
      description: "Input parameter, sets the input's placeholder attribute",
      control: {
        type: "text",
      },
    },
    label: {
      description: "Input parameter, sets the input's label attribute",
      control: {
        type: "text",
      },
    },
    className: {
      description: "Input parameter, sets the input's class attribute",
      control: {
        type: "text",
      },
    },
    error: {
      description:
        "Input parameter, passes down the error message from the form's validation",
      control: {
        type: "object",
      },
    },
    type: {
      description:
        "Input parameter, sets the input's type attribute. ie: text, email, password, etc.",
      control: {
        type: "text",
      },
    },
    as: {
      description:
        "Input parameter, sets the input's as attribute. Use to create a textarea. Note that for textarea, the height must be set manually. Don't use row attribute due to floating labels.",
      control: {
        type: "text",
      },
    },
    required: {
      description: "Input parameter, sets whether the input is required",
      control: {
        type: "boolean",
      },
    },
    options: {
      description: "Select parameter, sets the select's options",
      control: {
        type: "array",
      },
    },
  },
};

const Template = () => {
  /* Form validation using yup. Each form should have its own validation schema. See Yup's documentation for details.*/
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

  /* Console log for testing/demo purposes only */
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
      <Select
        name="select box"
        options={["Option 1", "Option 2"]}
        label="Select an option"
        className="mb-3"
      />
      {/* Button for demo in storybook only
     In the actual build, buttons are part of the layout and should not be directly inclued within form. */}
      <Button type="submit" buttonKind="primary" onClick={() => {}} size="lg">
        Submit
      </Button>
    </Form>
  );
};

/* -------------------------------------------------------------------------- */
/*                       Example Login Form                                   */
/* -------------------------------------------------------------------------- */
export const FormComponent = Template.bind({});
FormComponent.args = {};
