import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Person4Icon from '@mui/icons-material/Person4';
import BoltIcon from '@mui/icons-material/Bolt';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import ContactsIcon from '@mui/icons-material/Contacts';

export default function RightDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (status) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(status);
  };

  const navItem = [
    { text: 'About Me', href: '#About Me', icon: <Person4Icon /> },
    { text: 'Skills', href: '#Skills', icon: <BoltIcon /> },
    { text: 'Projects', href: '#Projects', icon: <AppRegistrationIcon /> },
    { text: 'Contact', href: '#Contact', icon: <ContactsIcon /> },
  ]

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List sx={
        {
          backgroundColor: '#3B82F6',
          height: '100vh',
          color: 'white',
          paddingTop: '20px'
        }
      }>
        {navItem.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component="a"
              href={item.href} 
              sx={{
                "&:hover": {
                  backgroundColor: "#2563EB",
                  color: "white",
                },
              }}
            >
              <ListItemIcon sx={{ color: "white" }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}

      </List>
    </Box>
  );

  return (
    <div className='bg-gray-800 rounded'>
      <Button onClick={toggleDrawer(true)}><MenuIcon /></Button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
}
