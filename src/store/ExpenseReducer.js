import { createSlice } from "@reduxjs/toolkit";

const initialExpenseState = {
  expenses: [],
  first: "Avinash",
  last: "kumar",
};

const expense = createSlice({
  name: "expense",
  initialState: initialExpenseState,
  reducers: {
    addExpenses(state, action) {
      state.expenses = action.payload;
    },
  },
});

export const expenseActions = expense.actions;

export default expense.reducer;
