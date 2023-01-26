import React from "react";

import Table from "./table";

export default {
  title: "Components/Table",
  component: Table,
  argTypes: {
    avatar: { control: "text" },
    alt: { control: "text" },
  },
};

export const Primary = (args) => (
  <Table>
    <Table.Header>Primary Accounts</Table.Header>
    <Table.Cell>
      <Table.Avatar src={args.avatar} alt={args.alt} />
    </Table.Cell>
  </Table>
);

export const Secondary = (args) => (
  <Table>
    <Table.Header>Linked Accounts</Table.Header>
    <Table.Cell>
      <Table.Avatar src={args.avatar} alt={args.alt} />
    </Table.Cell>
    <Table.Cell>
      <Table.Avatar src={args.avatar} alt={args.alt} />
    </Table.Cell>
  </Table>
);
