import React from "react";
import { httpGet } from "lib/http";

import { Menu as View } from "./menu.component";

export const Menu = ({ label }) => {
  const [syncMenu, setSyncMenu] = useState();

  useEffect(() => {
    // TODO: ask #engineering or #product for feedback
    httpGet(`users/${userId}`).then((user) => {
      setSyncMenu(user[`dropdown_${label}`]);
    });
  }, []);

  return <View label={label} syncMenu={syncMenu} />;
};
