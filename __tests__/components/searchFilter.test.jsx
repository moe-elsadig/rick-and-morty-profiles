import React from "react";
import { render, screen } from "@testing-library/react";
import SearchFilter from "../../components/SearchFilter";

describe("SearchFilter Component", () => {
  it("SearchFilter component renders correctly", () => {
    render(<SearchFilter />);
    const searchFilter = screen.getAllByTestId(
      "searchFilter-component"
    );
    expect(searchFilter).toBeTruthy();
  });
});
