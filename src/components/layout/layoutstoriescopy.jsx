import { Button } from "../button";
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
};

// const Template = ({ header, body, footer, ...args }) => {
//   return (
//     <div>
//       <Layout {...args} />
//     </div>
//   );
// };

export const Default = ({ header, body, footer }) => (
  <Layout header={header} body={body} footer={footer} />
);
Default.args = {
  header: (
    <>
      <Header.Left>
        <Button></Button>
      </Header.Left>
      <Header.Center>
        <div className="d-flex gap-2">
          <Header.Title title="Sign Up"></Header.Title>
          <Pill
            text="8"
            shape="round"
            opacity="20"
            className="px-3 py-1 fs-12px"
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
      <Button>Continue</Button>
    </>
  ),
};
