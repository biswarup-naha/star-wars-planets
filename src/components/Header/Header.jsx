import React from "react";
import { Grid, useMediaQuery } from "@mui/material";

import starWarsLogoLandscape from "../../assets/Star-wars-logo-new-tall.png";
import starWarsLogoPortrait from "../../assets/star-wars-portrait.jpg";

const Header = function Header() {
  const isPortrait = useMediaQuery("(orientation: portrait)");

  return (
    <Grid item sx={{ marginBottom: 5 }}>
      <header>
        <img
          alt="StarWars Planets"
          src={isPortrait ? starWarsLogoPortrait : starWarsLogoLandscape}
          width="100%"
        />
      </header>
    </Grid>
  );
};

export default Header;
