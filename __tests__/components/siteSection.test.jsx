import React from "react";
import { render, screen } from "@testing-library/react";
import SiteSections from "../../components/SiteSections";

describe("SiteSections Component", () => {
  it("SiteSections component renders correctly", () => {
    render(<SiteSections />);
    const siteSections = screen.getAllByTestId(
      "siteSections-component"
    );
    expect(siteSections).toBeTruthy();
  });
});
