import React from "react";
import { httpGet, httpPatch } from "lib/http";

import * as Dropdown from "./design-system/dropdown.component";

export const Menu = ({ label }) => {
  httpGet(`users/${userId}`).then((d) => {
    setIsOpen(user[`dropdown_${name}`]);
  });

  return (
    <>
      <Dropdown.Root>
        <Dropdown.Trigger label={label} />

        <Dropdown.Content>
          <Dropdown.Label text="Items" />
          <Dropdown.Item href="/page1">Page 1</Dropdown.Item>
          <Dropdown.Item href="/page2">Page 2</Dropdown.Item>
          <Dropdown.Item href="/page3">Page 3</Dropdown.Item>
          <Dropdown.Item href="/page4">Page 4</Dropdown.Item>
        </Dropdown.Content>

        <Dropdown.SubContent>
          <Dropdown.Label text="More items" />
          <Dropdown.Item href="/page5">Page 5</Dropdown.Item>
          <Dropdown.Item href="/page9">Page 9</Dropdown.Item>
        </Dropdown.SubContent>
      </Dropdown.Root>
    </>
  );
};
