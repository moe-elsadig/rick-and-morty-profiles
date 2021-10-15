import React from "react";
import { render, screen } from "@testing-library/react";
import LocationProfile from "../../components/LocationProfile";

describe("LocationProfile Component", () => {
  it("LocationProfile component renders correctly", () => {
    render(<LocationProfile />);
    const locationProfile = screen.getAllByTestId(
      "locationProfile-component"
    );
    expect(locationProfile).toBeTruthy();
  });
});
