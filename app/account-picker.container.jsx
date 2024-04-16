import React, { useCallback } from "react";
import { httpPatch } from "lib/http";

import { AccountPicker as View } from "./account-picker.component";

export const AccountPicker = () => {
  const patchUserMenuState = useCallback((userId) =>
    httpPatch("user", { [`menu-state-${userId}`]: true })
  );

  return <View onAccountSelect={patchUserMenuState} />;
};
