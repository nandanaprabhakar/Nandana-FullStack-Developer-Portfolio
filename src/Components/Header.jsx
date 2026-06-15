import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Container, Row } from 'react-bootstrap';
import logo from '../assets/logo.png'
function Header() {
    const [anchorElNav, setAnchorElNav] = useState(null);   
      const pages = [ 
        {name:'About', id:'about'}, 
        {name:'Skills', id:'skills'}, 
        {name:'Projects', id:'project'},
         {name:'Contact', id:'contact'}];
      const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
      };   
      const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };
  return (
    <div>
      <Container>
        <Row>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar
              position="fixed"
              sx={{
                 width: { xs: "95%", sm: "93%", md: "90%", lg: "77%" },
                 left: "50%",transform: "translateX(-50%)",
                borderRadius: '30px',
                boxShadow:
                  '0 1px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 212, 255, 0.2)',
                backgroundColor: "transparent" }}
            >
              
              <Toolbar sx={{ position: 'relative' }}>
                <img src={logo} height={'50px'}  alt="" style={{width: 'auto'}} />
                <Box
                  sx={{
                    flexGrow: 1,
                    display: { xs: 'flex', md: 'none' },
                    justifyContent: 'flex-end',
                  }}
                >
                  <IconButton
                    size="large"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>

               <Menu
  anchorEl={anchorElNav}
  open={Boolean(anchorElNav)}
  onClose={handleCloseNavMenu}
  sx={{
    '& .MuiPaper-root': {
      backgroundColor: '#020617',
      backgroundImage: 'none',
    },
  }}

>
  <Box >
    {pages.map((page) => (
      <MenuItem
       key={page.id} component='a' href={`#${page.id}`}
        onClick={handleCloseNavMenu}
        sx={{ color: '#fff' }}
      >
        {page.name}
      </MenuItem>
    ))}
  </Box>
</Menu>
                </Box>
                <Box
                  sx={{
                    flexGrow: 1,
                    display: { xs: 'none', md: 'flex' },
                    justifyContent: 'center',
                    gap: 4,
                  }}
                >
                  {pages.map((page) => (
                    <Button 
                      key={page.id} component='a' href={`#${page.id}`}
                      sx={{
                        color: '#fff',
                        textTransform: 'none',
                        fontSize: '16px',
                        fontWeight: 500,
                      }}
                    >
                      {page.name}
                    </Button>
                  ))}
                </Box>
              </Toolbar>
            </AppBar>
          </Box>
        </Row>
      </Container>
    </div>
  )
}

export default Header