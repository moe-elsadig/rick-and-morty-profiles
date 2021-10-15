import React from "react";
import { render, screen } from "@testing-library/react";
import CharacterProfile from "../../components/CharacterProfile";

describe("CharacterProfile Component", () => {
  it("CharacterProfile component renders correctly", () => {
    render(<CharacterProfile />);
    const characterProfile = screen.getAllByTestId(
      "CharacterProfile-component"
    );
    expect(characterProfile).toBeTruthy();
  });
});
