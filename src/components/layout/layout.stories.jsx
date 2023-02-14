import { Button } from "../button/button";
import { Default as Feed } from "../feed/feed.stories";
import { Variants as Pill } from "../pill/pill.stories";
import * as Table from "../table/table.stories";
import muMethods from "/mu-methods.svg";

import Header from "./header";
import { Layout } from "./layout";

/**
 * Step Storybook Component
 * @author [K. Ehrenclou](https://github.com/kehrenclou)
 * showing different layout combinations
 * needs updating when button and profile components are available
 */

export default {
  title: "Components/Layout",
  component: Layout,
  parameters: {
    docs: {
      description: {
        component: "Primary Layout Component showing basic parts",
      },
    },
  },

  argTypes: {
    mb: {
      description:
        "Styled Component Prop that controls margin-bottom on header.  Default is 32px. Wrap desired px in '' ",
      table: { defaultValue: { summary: "32px" } },
    },
    header: {
      description:
        "Header Component uses namespaced areas.  Pass buttons, icons, components or text into the namespaced areas. ",
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
      description:
        "Body Component.  To use, pass in buttons,components or text.",

      control: {
        type: null,
      },
    },
    footer: {
      description:
        "Footer Component.  To use, pass in buttons, components or text.",

      control: {
        type: null,
      },
    },
  },
};

const Template = ({ header, body, footer, mb }) => {
  return <Layout header={header} body={body} footer={footer} mb={mb}></Layout>;
};

/* -------------------------------------------------------------------------- */
/*                       Basic Parts of Layout Component                      */
/* -------------------------------------------------------------------------- */
export const LayoutComponent = Template.bind({});
LayoutComponent.args = {
  mb: "",
  header: (
    <>
      <Header.Left>header left</Header.Left>
      <Header.Center>header center</Header.Center>
      <Header.Right>header right</Header.Right>
    </>
  ),
  body: <>insert body components here</>,
  footer: <>insert footer components here</>,
};

/* -------------------------------------------------------------------------- */
/*                    Left-Center(title only)-Body -Footer                    */
/* -------------------------------------------------------------------------- */
export const LayoutLeftCenterBodyFooter = Template.bind({});
LayoutLeftCenterBodyFooter.args = {
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

/* -------------------------------------------------------------------------- */
/*           Left-Center(title/subtitle)-Body(with xtra text)-Footer          */
/* -------------------------------------------------------------------------- */
export const LayoutWithTitleSubtitleAndExtraBodyText = Template.bind({});
LayoutWithTitleSubtitleAndExtraBodyText.args = {
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

/* -------------------------------------------------------------------------- */
/*          Left-Center(title/subtitle)-Body(with xtra button)-Footer         */
/* -------------------------------------------------------------------------- */
export const LayoutWithTitleSubtitleAndExtraBodyButton = Template.bind({});
LayoutWithTitleSubtitleAndExtraBodyButton.args = {
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
      <div className="mb-auto ">Form or other components goes here</div>
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

/* -------------------------------------------------------------------------- */
/*                             LayoutWithHeaderAndButton                            */
/* -------------------------------------------------------------------------- */
export const LayoutWithHeaderTextAndFooterButton = Template.bind({});
LayoutWithHeaderTextAndFooterButton.args = {
  header: (
    <>
      <Header.Center>
        <Header.Title title="We've sent a link to your email to finish your registration process"></Header.Title>
      </Header.Center>
    </>
  ),

  footer: (
    <>
      <Button className="py-16px fw-bold fs-18px w-100">Open email app</Button>
    </>
  ),
};

export const LayoutWithHeaderMargin0RightButtonsTableAndNoFooter =
  Template.bind({});
LayoutWithHeaderMargin0RightButtonsTableAndNoFooter.args = {
  mb: "0px",
  header: (
    <>
      <Header.Left>
        <Button></Button>
      </Header.Left>

      <Header.Right>
        <Pill
          text="XX"
          shape="square"
          opacity="20"
          className="p-8px fs-16px"
        ></Pill>
        <Pill
          text="XX"
          shape="square"
          opacity="20"
          className="p-8px fs-16px"
        ></Pill>
      </Header.Right>
    </>
  ),
  body: (
    <>
      <div className="border p-24px mb-32px">component</div>
      <Table.Primary avatar="https://cdn.pixabay.com/photo/2021/05/24/09/15/ethereum-logo-6278328_960_720.png"></Table.Primary>
      <Table.Secondary
        avatar="https://cdn.pixabay.com/photo/2021/05/24/09/15/ethereum-logo-6278328_960_720.png"
        avatar2="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png"
      ></Table.Secondary>
    </>
  ),
};

export const NotificationsFeed = Template.bind({});
NotificationsFeed.args = {
  header: (
    <>
      <Header.Left>
        <img src={muMethods} width="24px" height="24px"></img>
      </Header.Left>
      <Header.Center>
        <div className="d-flex gap-2 justify-self-center">
          <Header.Title title="Notifications"></Header.Title>
          <Pill
            text="8"
            shape="round"
            opacity="20"
            className="px-8px py-4px fs-12px"
          ></Pill>
        </div>
        <Header.SubTitle subtitle="Subtitle"></Header.SubTitle>
      </Header.Center>
    </>
  ),
  body: (
    <>
      <Feed></Feed>
    </>
  ),
};
