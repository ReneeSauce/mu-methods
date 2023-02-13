import { Button } from "../button/button";
import { Default as Feed } from "../feed/feed.stories";
import { Variants as Pill } from "../pill/pill.stories";

import Header from "./header";
import { Layout } from "./layout";

/**
 * Step Storybook Component
 * @author [K. Ehrenclou](https://github.com/kehrenclou)
 */

export default {
  title: "Components/Layout",
  component: Layout,
  parameters: {
    docs: {
      // page: null,
      description: {
        component: "Primary Layout Component showing basic parts",
      },
    },
  },
  argTypes: {
    header: {
      description:
        "Header Component uses namespaced areas.  Pass components or text into these components. ",
      table: {
        type: {
          summary: "Namespaced Areas",
          detail:
            "<Header.Left/>, <Header.Center/>, <Header.Right/>, <Header.Title/> <Header.SubTitle/>",
        },
      },
      control: {
        type: null,
      },
    },
    body: {
      description: "Body Component.  To use, pass in components or text.",

      control: {
        type: null,
      },
    },
    footer: {
      description: "Footer Component.  To use, pass in components or text.",

      control: {
        type: null,
      },
    },
  },
};

const Template = ({ header, body, footer, ...args }) => {
  return <Layout header={header} body={body} footer={footer}></Layout>;
};

//Basic Parts of Layout Component
export const LayoutComponent = Template.bind({});
LayoutComponent.args = {
  header: (
    <>
      <Header.Left className="border">header left</Header.Left>
      <Header.Center className="border">header center</Header.Center>
      <Header.Right className="border">header right</Header.Right>
    </>
  ),
  body: <>insert body components here</>,
  footer: <>insert footer components here</>,
};

//Left-Center(title only)-Body -Footer
export const BasicLayoutLeftCenterBodyFooter = Template.bind({});
BasicLayoutLeftCenterBodyFooter.args = {
  header: (
    <>
      <Header.Left>
        <Button></Button>
      </Header.Left>
      <Header.Center>
        <Header.Title title="Log in"></Header.Title>
      </Header.Center>
    </>
  ),
  body: (
    <>
      <div className="mb-auto">Form or other components goes here</div>
    </>
  ),
  footer: (
    <>
      <Button className="py-16px fw-bold fs-18px w-100">Log In</Button>
    </>
  ),
};

//Left-Center(title/subtitle)-Body(with xtra button)-Footer
export const BasicLayoutWithSubtitleAndExtraBodyButton = Template.bind({});
BasicLayoutWithSubtitleAndExtraBodyButton.args = {
  header: (
    <>
      <Header.Left>
        <Button></Button>
      </Header.Left>
      <Header.Center>
        <Header.Title title="Sign up"></Header.Title>
        <Header.SubTitle subtitle="Step 1/4"></Header.SubTitle>
      </Header.Center>
    </>
  ),
  body: (
    <>
      <div className="mb-auto">Form or other components goes here</div>
      <Button className="btn btn-link text-decoration-none fs-18px text-white fw-bold">
        Sign Up
      </Button>
    </>
  ),
  footer: (
    <>
      <Button className="py-16px fw-bold fs-18px w-100">Log In</Button>
    </>
  ),
};
//Left-Center(title/subtitle)-Body(with xtra text)-Footer
export const BasicLayoutWithSubtitleAndExtraBodyText = Template.bind({});
BasicLayoutWithSubtitleAndExtraBodyText.args = {
  header: (
    <>
      <Header.Left>
        <Button></Button>
      </Header.Left>
      <Header.Center>
        <Header.Title title="Sign up"></Header.Title>
        <Header.SubTitle subtitle="Step 1/4"></Header.SubTitle>
      </Header.Center>
    </>
  ),
  body: (
    <>
      <div className="mb-auto">Form or other components goes here</div>
      <p className="fs-14px m-0 text-center lh-sm">
        Password should be at least 10 characters long and should include
        numbers & letters
      </p>
    </>
  ),
  footer: (
    <>
      <Button className="py-16px fw-bold fs-18px w-100">Log In</Button>
    </>
  ),
};

export const Default = Template.bind({});
Default.args = {
  header: (
    <>
      <Header.Left>
        <Button></Button>
      </Header.Left>
      <Header.Center>
        <div className="d-flex gap-2 justify-self-center">
          <Header.Title title="Notifications"></Header.Title>
          <Pill
            text="8"
            shape="round"
            opacity="20"
            className="px-2 py-1 fs-12px"
          ></Pill>
        </div>
        <Header.SubTitle subtitle="Subtitle"></Header.SubTitle>
      </Header.Center>
      <Header.Right>
        <Pill
          text="cc"
          shape="square"
          opacity="20"
          className="px-1 py-1 fs-12px"
        ></Pill>
        <Pill
          text="cc"
          shape="square"
          opacity="20"
          className="px-1 py-1 fs-12px"
        ></Pill>
      </Header.Right>
    </>
  ),
  body: (
    <>
      <Feed></Feed>
    </>
  ),
  footer: (
    <>
      <Button className="w-100">Continue</Button>
    </>
  ),
};
