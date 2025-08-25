import { Box, Grid, styled } from "@mui/material";
import React, { useContext } from "react";

//  component
import DeleteNote from './DeleteNote';

import { DataContext } from "../../context/DataProvider";


const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

function DeleteNotes() {
  const { deleteNotes  } = useContext(DataContext);
  return (
    <>
      <Box sx={{ display: "flex", width: "100%" }}>
        <Box component="main" sx={{ p: 3, width: "100%;" }}>
          <DrawerHeader />
         
          <Grid container sx={{ marginTop: 16 }}>
            {
            deleteNotes.map((deleteNotes ) => (
              <Grid item>
                  <DeleteNote DeleteNote={deleteNotes}/>
              </Grid>
            ))            
            }
          </Grid>
   
        </Box>
      </Box>
    </>
  );
}

export default DeleteNotes;