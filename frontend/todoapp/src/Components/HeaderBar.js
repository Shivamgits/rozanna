import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar } from '@mui/material';
import styled from '@emotion/styled';
import todo from "../images/todo.png"




const Header = styled(AppBar)`
 z-Index: 1201;
 height: 70px;
 background: #fff;
 box-shadow: inset 0 -1px 0 0 #dadce0;
`;
const Heading = styled(Typography)`
color: #5F6368;
font-size: 2.8rem;
margin-left: 10px;
`;

const HeaderBar = ({ open , handleDrawer}) => {
    
  return (
    <>

<Header  open={open}>
        <Toolbar>
          <IconButton
            
            onClick={handleDrawer}
            edge="start"
            sx={{
              marginRight: '20px',
           
            }}
          >
            <MenuIcon />
          </IconButton>
          <img src={todo} alt="logo" style={{width:50,marginTop:8}} />
          <Heading >
          rozaana
          </Heading>
        </Toolbar>
      </Header>


    </>
  )
}

export default HeaderBar