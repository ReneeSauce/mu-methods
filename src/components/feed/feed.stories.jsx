import React from "react";

import { Feed } from "./feed";

/* 
 @author [Jenny Doctor](https://github.com/jendoc)
*/

export default {
  title: "Components/Feed",
  component: Feed
};


export const Default = () => (
  <Feed>
    <Feed.Heading>Dec 07 (today)</Feed.Heading>
    <Feed.Item>Notifications go here</Feed.Item>
    <Feed.Item>Test 1 2</Feed.Item>
    <Feed.Heading>Dec 05</Feed.Heading>
    <Feed.Item>More testing</Feed.Item>  
    </Feed>
)