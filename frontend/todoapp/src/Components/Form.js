import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import {useState , useRef} from "react"
import { ClickAwayListener } from '@mui/material';

import {DataContext } from "../Context/DataProvider"
const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    margin: auto;
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
    border-color: #e0e0e0;
    width: 600px;
    border-radius: 8px;
    min-height: 30px;
    padding: 10px 15px;
`

const note = {
    id: "",
    heading: "",
    text: "",
}

const Form = () => {
   const [showText, setShowText] = useState(false)
   const [addNote, setAddNote] = useState(note)
   const {notes, setNotes} = React.useContext(DataContext)
   const containerRef = useRef();
   


   const onTextClick = () => {
       setShowText(true);
       containerRef.current.style.minHeight = '70px'
   }
   const handleClickAway = () => {
       setShowText(false);
       containerRef.current.style.minHeight = '30px'
   }
    return (
        <ClickAwayListener onClickAway={handleClickAway}>

  <Container ref={containerRef} >
      {showText &&
      <TextField 
      placeholder="Title"
      variant="standard"
      InputProps={{ disableUnderline: true }}
      style={{ marginBottom: 10 }}
      />
    }
      <TextField
      placeholder="Your Work ToDo" 
      multiline
      maxRows={Infinity}
      variant="standard"
      InputProps={{ disableUnderline: true }}
      onClick={onTextClick}
      />
  </Container>
      </ClickAwayListener>
    
  )
}

export default Form