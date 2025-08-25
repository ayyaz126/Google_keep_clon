import { useContext } from "react";

import { Card, CardContent, CardActions, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  RestoreFromTrashOutlined as Restore,
  DeleteForeverOutlined as Delete,
} from "@mui/icons-material";
import { DataContext } from "../../context/DataProvider";

const StyledCard = styled(Card)`
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  width: 240px;
  margin: 10px;
  box-shadow: none;
`;

const DeleteNote = ({ note }) => {
  const { deleteNotes, setNotes, setDeleteNotes } = useContext(DataContext);

  const restoreNote = (note) => {
    const updatedNotes = deleteNotes.filter((data) => data.id !== note.id);
    setDeleteNotes(updatedNotes);
    setNotes((prevArr) => [note, ...prevArr]);
  };

  const removeNote = (note) => {
    const updatedNotes = deleteNotes.filter((data) => data.id !== note.id);
    setDeleteNotes(updatedNotes);
  };

  return (
    <StyledCard>
      <CardContent>
        <Typography></Typography>
        <Typography></Typography>
      </CardContent>
      <CardActions>
        <Delete
          fontSize="small"
          style={{ marginLeft: "auto" }}
          onClick={() => removeNote(note)}
        />
        <Restore fontSize="small" onClick={() => restoreNote(note)} />
      </CardActions>
    </StyledCard>
  );
};

export default DeleteNote;
