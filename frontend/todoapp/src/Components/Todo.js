import React from 'react'
import { styled } from '@mui/material/styles';
import Form from './Form';
import { Box } from '@mui/material';


const DrawerHeader = styled('div')(({ theme }) => ({
 
    ...theme.mixins.toolbar,
  }));
  
const Todo = () => {
  return (
    <Box sx={{ display: 'flex' ,width: "100%"}}>
    <Box sx={{ p: 3, width: "100%" }}>

     <DrawerHeader/>
     <Form/>
    </Box>
     
    </Box>
  )
}

export default Todo