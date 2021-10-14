import React from "react";
import { render, screen } from "@testing-library/react";
import Paginator from "../../components/Paginator";

describe("Paginator Component", () => {
  it("Paginator component renders correctly", () => {
    render(<Paginator />);
    const buttons = screen.getAllByTestId("paginator-buttons-area");
    expect(buttons).toBeTruthy();
  });

  it.todo("next button renders correctly");
  it.todo("back button renders correctly");
  it.todo("page number renders correctly");
  it.todo("next button works correctly");
  it.todo("back button works correctly");
});
