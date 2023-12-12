import { render, screen } from "@testing-library/react";
import Test from "./Test";

describe("Test components", () => {
  test("renders Test1 as a text", () => {
    render(<Test />);
    const Test1 = screen.getByText("Test1");
    expect(Test1).toBeInTheDocument();
  });
  test("renders Test2 as a text", () => {
    render(<Test />);
    const Test2 = screen.getByText("Test2");
    expect(Test2).toBeInTheDocument();
  });
  test("renders Test3 as a text", () => {
    render(<Test />);
    const Test3 = screen.getByText("Test3");
    expect(Test3).toBeInTheDocument();
  });
});
