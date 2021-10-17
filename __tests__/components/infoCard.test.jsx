import React from "react";
import { render, screen } from "@testing-library/react";
import InfoCard from "../../components/InfoCard";

describe("InfoCard Component", () => {
  it("InfoCard component renders correctly", () => {
    render(<InfoCard />);
    const infoCard = screen.getAllByTestId(
      "infoCard-component"
    );
    expect(infoCard).toBeTruthy();
  });
});
