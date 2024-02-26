import React from "react";
import { Grid, Link, Typography } from "@mui/material";

import starWarsLogoGitHub from "../../assets/starwars-planet-icon-github.png";

const Footer = function Footer() {
  return (
    <Grid item sx={{ marginTop: 5 }}>
      <footer>
        <Typography variant="body1" align="center">
          A simple project with all the <strong>Must-Have features</strong> I&apos;d like to add to
          any <strong>React</strong> project.
          <br />
          <Link href="https://github.com/gabrielizalo/starwars-planets">
            <img alt="StarWars Planets GitHub" src={starWarsLogoGitHub} />
          </Link>
        </Typography>
      </footer>
    </Grid>
  );
};

export default Footer;
