import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState } = createGlobalState({
  user: {},
  isAdmin: false,
  isConnected: false
});

export {setGlobalState, useGlobalState};