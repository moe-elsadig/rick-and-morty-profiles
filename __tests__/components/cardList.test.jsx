import React from "react";
import { render, screen } from "@testing-library/react";
import CardList from "../../components/CardList";

describe("CardList Component", () => {
  it("CardList component renders correctly", () => {
    render(<CardList />);
    const cardList = screen.getAllByTestId(
      "cardList-component"
    );
    expect(cardList).toBeTruthy();
  });
});
