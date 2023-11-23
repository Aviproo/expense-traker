import { useState } from "react";
import Context from "./Context";

const ContextProvider = (props) => {
  const [token, setToken] = useState();
  const [expense, setExpense] = useState([]);

  const addToken = (tokenId) => {
    setToken(tokenId);
  };

  const addExpense = (item) => {
    setExpense([...expense, item]);
  };
  const data = {
    token: token,
    addToken: addToken,
    expense: expense,
    addExpense: addExpense,
  };

  return <Context.Provider value={data}>{props.children}</Context.Provider>;
};
export default ContextProvider;
