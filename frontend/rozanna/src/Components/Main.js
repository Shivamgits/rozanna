import React from 'react'
import SwipeDrawer from './SwipeDrawer'
import Todo from './Todo'

import Box from '@mui/material/Box';

const Main = () => {
  return (
    <Box style={{display: 'flex' , width: '100%'}}>
    
    
    <SwipeDrawer/>
    <Todo/>
    
    
    
    </Box>
  )
}

export default Main
