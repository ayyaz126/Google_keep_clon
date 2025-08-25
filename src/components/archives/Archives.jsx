import { Box, Grid, styled } from "@mui/material";
import React, { useContext } from "react";

//  component

import Archive from "./Archive";

import { DataContext } from "../../context/DataProvider";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

function Archives() {
  const { archiveNotes } = useContext(DataContext);
  return (
    <>
      <Box sx={{ display: "flex", width: "100%" }}>
        <Box component="main" sx={{ p: 3, width: "100%;" }}>
          <DrawerHeader />
          {
            <Grid container>
              {archiveNotes.map((archive) => (
                <Grid item>
                  <Archive archive={archive} />
                </Grid>
              ))}
            </Grid>
          }
        </Box>
      </Box>
    </>
  );
}

export default Archives;
