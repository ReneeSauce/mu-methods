import React from "react";

import { Feed } from "./feed";
import { Notification } from "../notification";

/* 
 @author [Jenny Doctor](https://github.com/jendoc)
*/

export default {
  title: "Components/Feed",
  component: Feed,
};

export const Default = () => (
  <Feed>
    <Feed.Heading>Dec 07 (today)</Feed.Heading>
    <Feed.Item>
      <Notification
        src="https://images.unsplash.com/photo-1615361200141-f45040f367be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
        status="unread"
        summary="Sign transaction for 0.008 ETH"
        title="Coinbase"
      />
    </Feed.Item>
    <Feed.Item>
      {" "}
      <Notification
        src="https://images.unsplash.com/photo-1636909422766-9d522ebf6d8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1126&q=80"
        status="read"
        summary="Seed phrase recovery request"
        title="PeerName"
      />
    </Feed.Item>
    <Feed.Heading>Dec 05</Feed.Heading>
    <Feed.Item>
      {" "}
      <Notification
        src="https://images.unsplash.com/photo-1615361200141-f45040f367be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
        status="unread"
        summary="Transaction for 0.008 ETH signed"
        title="Coinbase"
      />
    </Feed.Item>
  </Feed>
);
