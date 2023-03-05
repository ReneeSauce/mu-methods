import { Peer } from "./peer";

/**
 * @author [Kurtney J.] (github.com/xhundo)
 * @param {string} title by default is chosen peers.
 */

export default {
  title: "Components/Peer",
  component: Peer,
  argTypes: {
    title: { control: "text" },
    src: { control: "text" },
    alt: { control: "text" },
    action: {
      onClick: "Peer removed!",
    },
  },
};

const peers = [
  {
    name: "Peer 1",
    src: "https://imgix.ranker.com/list_img_v2/18411/518411/original/my-top-10-favorite-anime-characters-u2",
  },

  {
    name: "Peer 2",
    src: "https://www.looper.com/img/gallery/30-most-popular-boy-anime-characters-ranked-worst-to-best/l-intro-1648715126.jpg",
  },
];

export const Default = (args) => (
  <Peer title={args.title}>
    {peers.map((peer) => (
      <Peer.Cell peer={peer.name} src={peer.src} alt={args.alt} />
    ))}
  </Peer>
);
