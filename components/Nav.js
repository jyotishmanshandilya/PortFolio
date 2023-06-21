'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CardMedia } from '@mui/material';
import { ImageList, ImageListItem } from '@mui/material';
import { Link } from '@mui/material';
import { useState } from 'react';

const drawerWidth = 140;
const navItems = {'data':[
  {
    'name': 'insta', 
    'link': 'https://www.instagram.com/jyotishman_jbx/'
  }, 
  {
    'name': 'linkedin',
    'link': 'https://www.linkedin.com/in/jyotishman-shandilya/'
  }
]};


export default function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography className='logo_text' variant="h6" sx={{ my: 2, textColor:'dark-blue' }}>
        Jyotishman
      </Typography>
      <Divider />
      <List>
        {navItems.data.map((item)=>(
          <Link href={item.link}>
          <Button key={item.name} sx={{ color: '#000' }}>
            {item.name}
          </Button>
        </Link>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', marginBottom: '5em' }}>
      <CssBaseline />
      <AppBar className='bg-[#212A3E]' component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            className='logo_text'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Jyotishman Shandilya
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.data.map((item) => (
              <Link href={item.link}>
                <Button key={item.name} sx={{ color: '#fff' }}>
                  {item.name}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
