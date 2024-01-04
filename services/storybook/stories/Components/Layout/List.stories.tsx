import "@join-world/ui-components-layout/style.css";

import {
  List,
  ListItem,
  OrderedList,
  UnorderedList,
} from "@join-world/ui-components-layout";
import React from "react";

export default {
  title: "Components/Layout/List",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const OrderedListStory = {
  render: () => (
    <OrderedList spacing={"size3"}>
      <ListItem fontSize="bodyR1">1번</ListItem>
      <ListItem fontSize="bodyR1">2번</ListItem>
      <ListItem fontSize="bodyR1">3번</ListItem>
    </OrderedList>
  ),
};

export const UnorderedListStory = {
  args: {
    color: "black",
  },
  render: () => (
    <UnorderedList spacing={"size3"}>
      <ListItem fontSize="bodyR1">1번</ListItem>
      <ListItem fontSize="bodyR1">2번</ListItem>
      <ListItem fontSize="bodyR1">3번</ListItem>
    </UnorderedList>
  ),
};

export const ListStory = {
  args: {
    color: "black",
  },
  render: () => (
    <List variant="ordered" spacing={"size3"}>
      <ListItem fontSize="bodyR1">1번</ListItem>
      <ListItem fontSize="bodyR1">2번</ListItem>
      <ListItem fontSize="bodyR1">3번</ListItem>
    </List>
  ),
};
