import { Feed } from "./feed";

export default {
  title: "Components/Feed",
  component: Feed,
};

const FeedTemplate = ({ items, ...args }) => (
  <Feed>
    <Feed.HeaderDate/>
    {items.map((item) => (
      <Feed.Item {...item} />
    ))}
  </Feed>
);

export const Empty = FeedTemplate.bind({});
Empty.args = { items: [] };

export const OneItem = FeedTemplate.bind({});
OneItem.args = {
    children: [<Feed.Item/>]
};