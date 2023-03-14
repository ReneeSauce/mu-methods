import { action } from "@storybook/addon-actions";
import { useState } from "react";
import { Peer } from "./peer";

/**
 * @author [Kurtney J.] (https://github.com/xhundo)
 * @param {string} title by default is chosen peers.
 * @param {string} name expects peer name.
 * @param {string} src expects peer avatar
 * @param {string} alt expects alt for peer avatar
 */

export default {
  title: "Components/Peer",
  component: Peer,
  argTypes: {
    title: { control: "text" },
    alt: { control: "text" },
    add: { control: "boolean" },
  },
};

export const Template = (args) => {
  // Inital state for peers:
  const [peers, setPeers] = useState([
    {
      name: "Peer 1",
      src: "https://imgix.ranker.com/list_img_v2/18411/518411/original/my-top-10-favorite-anime-characters-u2",
    },
    {
      name: "Peer 2",
      src: "https://cdn.epicstream.com/images/ncavvykf/epicstream/f51726836cd5a23437a8439bd35c3eecf3ee48c8-800x400.png?rect=45,0,711,400&w=700&h=394&dpr=2",
    },
  ]);

  // useEffect(() => {
  //   // After fetching peers from API: set peers
  //   // setPeers();
  // }, []);

  return (
    <Peer title={args.title}>
      {peers.map((peer) => (
        <Peer.Cell
          src={peer.src}
          peer={peer.name}
          alt={args.alt}
          isAdding={args.add}
          handleAddPeer={action("addPeer")}
          handleDeletePeer={action("deletePeer")}
        />
      ))}
    </Peer>
  );
};

Template.storyName = "Default";
