import { Peer } from "./peer";

/**
 * @author [Kurtney J.] (github.com/xhundo)
 */

export default {
  title: "Components/Peer",
  component: Peer,
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    action: {
      onClick: "Peer removed!",
    },
  },
};

const peers = [
  {
    name: "Peer 2",
    src: "https://imgix.ranker.com/list_img_v2/18411/518411/original/my-top-10-favorite-anime-characters-u2",
  },

  {
    name: "Peer 2",
    src: "https://www.looper.com/img/gallery/30-most-popular-boy-anime-characters-ranked-worst-to-best/l-intro-1648715126.jpg",
  },
];

export const Template = (args) =>
  peers.map((peer) => (
    <Peer peer={peer.name} alt={args.alt} size={args.size} src={peer.src} />
  ));
