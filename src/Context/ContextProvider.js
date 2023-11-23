import { useState } from "react";
import Context from "./Context";

const ContextProvider = (props) => {
  const [token, setToken] = useState();

  const addToken = (tokenId) => {
    setToken(tokenId);
  };

  const data = {
    token: token,
    addToken: addToken,
  };

  return <Context.Provider value={data}>{props.children}</Context.Provider>;
};
export default ContextProvider;
