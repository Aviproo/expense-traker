import { createSlice } from "@reduxjs/toolkit";
import { Button } from "react-bootstrap";

const initialExpenseState = {
  expenses: [],
  totalExpense: 0,
  background: "white",
  color: null,
  button: null,
};

const expense = createSlice({
  name: "expense",
  initialState: initialExpenseState,
  reducers: {
    addExpenses(state, action) {
      state.expenses = action.payload;
    },
    premium(state) {
      state.background = "black";
      state.color = "white";
      state.button = (
        <Button style={{ marginLeft: "100px" }}>Download file</Button>
      );
    },
  },
});

export const expenseActions = expense.actions;

export default expense.reducer;
