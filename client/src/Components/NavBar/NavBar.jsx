import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Button, useMediaQuery, useTheme, styled } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StoreIcon from '@mui/icons-material/Store';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import HomeIcon from '@mui/icons-material/Home';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import { useToast } from "../../Context/ToastContext";
import sunIcon from '../../assets/sun.png'; // Adjust the path as necessary
import moonIcon from '../../assets/moon.png'; // Adjust the path as necessary
import logo from '../../assets/Logo.png'; // Adjust the path as necessary
import { Tooltip } from '@mui/material';

const StyledAppBar = styled(AppBar)(({ darkMode }) => ({
  backgroundColor: darkMode ? 'black' : '#002147',
}));

const Logo = styled('img')({
  width: '220px',
  height: 'auto',
  marginRight: 'auto',
});

const StyledButton = styled(Button)(({ isActive }) => ({
  fontSize: '1rem',
  color: isActive ? '#FFD700' : '#FFF',
  textDecoration: 'none',  // Remove underline from default state
  '&:hover': {
    color: '#FFD700',
    textDecoration: 'none',  // Remove underline from hover state
  },
}));

const MenuContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginLeft: 'auto',
});

const MobileMenu = styled('div')(({ open }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  position: 'fixed',
  top: '0',
  right: '0',
  backgroundColor: '#002147',
  width: '100%',
  height: '100vh',
  padding: '20px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
  zIndex: 1000,
  overflowY: 'auto',
  transform: open ? 'translateX(0)' : 'translateX(100%)',
  transition: 'transform 0.4s ease-in-out',
}));

const MobileMenuButton = styled(IconButton)({
  fill: '#fff',
});

function Navbar({ darkMode, toggleDarkMode }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const [openMenu, setOpenMenu] = useState(false);
  const { userLoggedIn, setUserLoggedIn } = useAuth();
  let navigate = useNavigate();
  const { showToast } = useToast();
  const location = useLocation();

  const handleMenuClick = () => {
    setOpenMenu(!openMenu);
  };

  const handleLogout = () => {
    try {
      const token = sessionStorage.getItem('token');
      if (token) {
        sessionStorage.removeItem('token');
      }
    } catch (error) {
      console.error('Error removing token from sessionStorage:', error);
    }
     
    setUserLoggedIn(false);
    localStorage.removeItem('token');
    navigate('/', { replace: true });
    showToast("success", "", "Logged out successfully");
  };

  const handleSearch = (query) => {
    console.log("Search query:", query);
    // Implement search logic here
  };

  const isActive = (path) => location.pathname === path;

  const handleLinkClick = () => {
    if (isMobile) setOpenMenu(false);
  };

  return (
    <StyledAppBar position="sticky" darkMode={darkMode}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <IconButton component={Link} to="/">
          <Logo src={logo} alt="Logo" />
        </IconButton>
        
        {isMobile ? (
          <>
            <Toolbar style={{display: "flex", justifyContent: 'flex-end', alignItems: "center"}}>
              <Tooltip title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}>
                <IconButton onClick={toggleDarkMode} style={{ marginRight: '10px' }}>
                  <img src={darkMode ? sunIcon : moonIcon} alt="Toggle Dark Mode" style={{ width: '20px', height: '20px' }} />
                </IconButton>
              </Tooltip>
              
              <MobileMenuButton onClick={handleMenuClick}>
                <MenuIcon sx={{ fontSize: '2rem' }} />
              </MobileMenuButton>
            </Toolbar>
            
            <MobileMenu open={openMenu}>
              <IconButton onClick={handleMenuClick} style={{ marginBottom: '20px', color: '#fff' }}>
                Close
              </IconButton>
              <StyledButton
                color="inherit"
                component={Link}
                to="/"
                isActive={isActive('/')}
                startIcon={<HomeIcon sx={{ fontSize: '1.5rem' }} />}
                fullWidth
                style={{ marginBottom: '15px' }}
                onClick={handleLinkClick}
              >
                Home
              </StyledButton>
              <StyledButton
                color="inherit"
                component={Link}
                to="/shop"
                isActive={isActive('/shop')}
                startIcon={<StoreIcon sx={{ fontSize: '1.5rem' }} />}
                fullWidth
                style={{ marginBottom: '15px' }}
                onClick={handleLinkClick}
              >
                Shop
              </StyledButton>
              <StyledButton
                color="inherit"
                component={Link}
                to="/wishlist"
                isActive={isActive('/wishlist')}
                startIcon={<FavoriteIcon sx={{ fontSize: '1.5rem' }} />}
                fullWidth
                style={{ marginBottom: '15px' }}
                onClick={handleLinkClick}
              >
                Wishlist
              </StyledButton>
              <StyledButton
                color="inherit"
                component={Link}
                to="/cart"
                isActive={isActive('/cart')}
                startIcon={<ShoppingCartIcon sx={{ fontSize: '1.5rem' }} />}
                fullWidth
                style={{ marginBottom: '15px' }}
                onClick={handleLinkClick}
              >
                Cart
              </StyledButton>

              {userLoggedIn && (
                <StyledButton
                  color="inherit"
                  component={Link}
                  to="/orders"
                  isActive={isActive('/orders')}
                  startIcon={<ShoppingBagIcon sx={{ fontSize: '1.5rem' }} />}
                  fullWidth
                  style={{ marginBottom: '15px' }}
                  onClick={handleLinkClick}
                >
                  Orders
                </StyledButton>
              )}

              <StyledButton
                color="inherit"
                component={Link}
                to={userLoggedIn ? "#" : "/login"}
                isActive={isActive('/login')}
                onClick={userLoggedIn ? handleLogout : handleLinkClick}
                startIcon={<AccountCircleIcon sx={{ fontSize: '1.5rem' }} />}
                fullWidth
                style={{ marginBottom: '15px' }}
              >
                {userLoggedIn ? "Logout" : "Login"}
              </StyledButton>
            </MobileMenu>
          </>
        ) : (
          <MenuContainer>
            <StyledButton color="inherit" component={Link} to="/" isActive={isActive('/')} startIcon={<HomeIcon sx={{ fontSize: '1.5rem' }} />}>
              Home
            </StyledButton>
            <StyledButton color="inherit" component={Link} to="/shop" isActive={isActive('/shop')} startIcon={<StoreIcon sx={{ fontSize: '1.5rem' }} />}>
              Shop
            </StyledButton>
            <StyledButton color="inherit" component={Link} to="/wishlist" isActive={isActive('/wishlist')} startIcon={<FavoriteIcon sx={{ fontSize: '1.5rem' }} />}>
              Wishlist
            </StyledButton>
            <StyledButton color="inherit" component={Link} to="/cart" isActive={isActive('/cart')} startIcon={<ShoppingCartIcon sx={{ fontSize: '1.5rem' }} />}>
              Cart
            </StyledButton>
            {userLoggedIn && (
              <StyledButton color="inherit" component={Link} to="/orders" isActive={isActive('/orders')} startIcon={<ShoppingBagIcon sx={{ fontSize: '1.5rem' }} />}>
                Orders
              </StyledButton>
            )}
            
            <StyledButton
              color="inherit"
              component={Link}
              to={userLoggedIn ? "#" : "/login"}
              isActive={isActive('/login')}
              onClick={userLoggedIn ? handleLogout : null}
              startIcon={<AccountCircleIcon sx={{ fontSize: '1.5rem' }} />}
            >
              {userLoggedIn ? "Logout" : "Login"}
            </StyledButton>
            <Tooltip title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}>
              <IconButton onClick={toggleDarkMode} style={{ marginLeft: '15px' }}>
                <img src={darkMode ? sunIcon : moonIcon} alt="Toggle Dark Mode" style={{ width: '20px', height: '20px' }} />
              </IconButton>
            </Tooltip>
          </MenuContainer>
        )}
      </Toolbar>
    </StyledAppBar>
  );
}

export default Navbar;
