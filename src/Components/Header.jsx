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
      const pages = ['Home', 'About', 'Projects', 'Contact'];
      const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
      };   
      const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };
  return (
    <div>
        <div>
      <Container>
        <Row>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar
              position="static"
              sx={{
                borderRadius: '30px',
                boxShadow:
                  '0 1px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 212, 255, 0.2)',
                backgroundColor: "transparent" }}
            >
              
              <Toolbar sx={{ position: 'relative' }}>
                <img src={logo} height={'50px'}  alt="" style={{width: 'auto'}} />
                {/* Mobile Menu */}
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
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    PaperProps={{
                      sx: {
                        bgcolor: '#0B1020',
                        color: '#fff',
                        borderRadius: 3,
                        minWidth: 180,
                        border: '1px solid rgba(123,97,255,.2)',
                      },
                    }}
                  >
                    {pages.map((page) => (
                      <MenuItem
                        key={page}
                        onClick={handleCloseNavMenu}
                      >
                        <Typography>{page}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>

                {/* Desktop Menu */}
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
                    
                      key={page}
                      sx={{
                        color: '#fff',
                        textTransform: 'none',
                        fontSize: '16px',
                        fontWeight: 500,
                      }}
                    >
                      {page}
                    </Button>
                  ))}
                </Box>
              </Toolbar>
            </AppBar>
          </Box>
        </Row>
      </Container>
    </div>
    </div>
  )
}

export default Header