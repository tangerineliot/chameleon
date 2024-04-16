import React from "react";

import * as Dropdown from "../design-system/dropdown.component";

export const AccountPicker = ({ onAccountSelect }) => {
  return (
    <Dropdown.Root>
      <Dropdown.Trigger label="Accounts" />

      <Dropdown.Content>
        <Dropdown.Label text="Accounts" />
        <Dropdown.Item href="/accounts/1" onClick={() => onAccountSelect("1")}>
          Account #1
        </Dropdown.Item>
        <Dropdown.Item href="/accounts/2" onClick={() => onAccountSelect("2")}>
          Account #2
        </Dropdown.Item>
        <Dropdown.Item href="/accounts/3" onClick={() => onAccountSelect("3")}>
          Account #3
        </Dropdown.Item>
        <Dropdown.Item href="/accounts/4" onClick={() => onAccountSelect("4")}>
          Account #4
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown.Root>
  );
};
