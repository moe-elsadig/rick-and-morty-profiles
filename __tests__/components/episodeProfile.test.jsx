import React from "react";
import { render, screen } from "@testing-library/react";
import EpisodeProfile from "../../components/EpisodeProfile";

describe("EpisodeProfile Component", () => {
  it("EpisodeProfile component renders correctly", () => {
    render(<EpisodeProfile />);
    const episodeProfile = screen.getAllByTestId(
      "episodeProfile-component"
    );
    expect(episodeProfile).toBeTruthy();
  });
});
