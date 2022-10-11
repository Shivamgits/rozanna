import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText'; 
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
const NavList = ({  open }) => {
    const navList = [
        {id: 1, name: 'ToDo', icon: <LightbulbOutlinedIcon/>},
        {id: 2, name: 'Remainder', icon: <NotificationsNoneOutlinedIcon/>},
        {id: 3, name: 'Archive', icon: <ArchiveOutlinedIcon/>},
        {id: 4, name: 'Trash', icon: <DeleteForeverOutlinedIcon/>},
    ]
  return (
    <>

<List>
          {navList.map(list => (
            <ListItemButton
              key={list.id}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
              {list.icon}
              </ListItemIcon>
              <ListItemText primary={list.name} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          ))}
        </List>


    </>
  )
}

export default NavList