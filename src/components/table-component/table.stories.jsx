import React from "react";

import Table from "./table";

export default {
  title: "Components/Table",
  component: Table,
};

export const First = (args) => (
  <Table {...args}>
    <Table.Header>Primary Account</Table.Header>
    <Table.Cell></Table.Cell>
  </Table>
);

export const Second = (args) => (
  <Table {...args}>
    <Table.Header>Linked Accounts</Table.Header>
    <Table.Cell></Table.Cell>
    <Table.Cell></Table.Cell>
  </Table>
);
