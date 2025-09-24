import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import SideBar from '../SideBar/SideBar';
import { useState } from 'react';

const Header = () => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const onClickOpenMenu = () => setIsActiveMenu(true);
  const onClickCloseMenu = () => setIsActiveMenu(false);

  const onClickOpenLogin = () => setIsLoginOpen(true);
  const onClickCloseLogin = () => setIsLoginOpen(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'black' }}>
        <Toolbar>
          <IconButton
            onClick={onClickOpenMenu}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit" onClick={onClickOpenLogin}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      {isActiveMenu && <SideBar onClickCloseModal={onClickCloseMenu} isActiveMenu={isActiveMenu} />}
      {isLoginOpen && (
        <SideBar onClickCloseModal={onClickCloseLogin} isLogin={true} isActiveMenu={isLoginOpen} />
      )}
    </Box>
  );
};

export default Header;
