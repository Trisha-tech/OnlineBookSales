import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Button, useMediaQuery, useTheme, styled } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StoreIcon from '@mui/icons-material/Store';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import HomeIcon from '@mui/icons-material/Home';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import { useToast } from "../../Context/ToastContext";
import sunIcon from '../../assets/sun.png'; // Adjust the path as necessary
import moonIcon from '../../assets/moon.png'; // Adjust the path as necessary
import logo from '../../assets/Logo.png'; // Adjust the path as necessary

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#002147', // Adjust color to your preference
});

const Logo = styled('img')({
  width: '220px',
  height: 'auto',
  marginRight: 'auto',
});

const StyledButton = styled(Button)({
  fontSize: '1rem', // Adjust font size
  '&:hover': {
    color: '#FFD700', // Adjust hover color
    textDecoration: 'underline', // Underline on hover
  },
});

const MenuContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

const MobileMenu = styled('div')(({ open }) => ({
  display: open ? 'flex' : 'none',
  flexDirection: 'column',
  position: 'absolute',
  top: '64px', // Adjust based on AppBar height
  right: '0',
  backgroundColor: '#002147',
  width: '100%',
  padding: '10px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
  zIndex: 1000, // Ensure it appears above other content
}));

const MobileMenuButton = styled(IconButton)({
  fill: '#fff', // Adjust color as needed
  marginLeft: '-13px', // Adjust for proper alignment
});

function Navbar({ darkMode, toggleDarkMode }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [openMenu, setOpenMenu] = useState(false);

  const { userLoggedIn, setUserLoggedIn } = useAuth();
  let navigate = useNavigate();
  const { showToast } = useToast();

  const handleMenuClick = () => {
    setOpenMenu(!openMenu);
  };

  const handleLogout = () => {
    try {
      const token = sessionStorage.getItem('token');
      if (token) {
        sessionStorage.removeItem('token'); // Remove the token from sessionStorage
      }
    } catch (error) {
      console.error('Error removing token from sessionStorage:', error);
    }

    setUserLoggedIn(false); // Update the user logged-in state
    navigate('/', { replace: true }); // Redirect to home page
    showToast("success", "", "Logged out successfully");
  };

  return (
    <StyledAppBar position="sticky">
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <IconButton component={Link} to="/">
          <Logo src={logo} alt="Logo" />
        </IconButton>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton onClick={toggleDarkMode} style={{ marginRight: '10px' }}>
            <img src={darkMode ? sunIcon : moonIcon} alt="Toggle Dark Mode" style={{ width: '20px', height: '20px' }} />
          </IconButton>
          {isMobile ? (
            <>
              <MobileMenuButton onClick={handleMenuClick}>
                <MenuIcon sx={{ fontSize: '2rem' }} />
              </MobileMenuButton>
              <MobileMenu open={openMenu}>
                <StyledButton
                  color="inherit"
                  component={Link}
                  to={userLoggedIn ? "#" : "/login"}
                  onClick={userLoggedIn ? handleLogout : null}
                  startIcon={<AccountCircleIcon sx={{ fontSize: '1.5rem' }} />}
                  fullWidth
                >
                  {userLoggedIn ? "Logout" : "Login"}
                </StyledButton>
                {userLoggedIn && (
                  <StyledButton
                    color="inherit"
                    component={Link}
                    to="/profile"
                    startIcon={<AccountCircleIcon sx={{ fontSize: '1.5rem' }} />}
                    fullWidth
                  >
                    Profile
                  </StyledButton>
                )}
                <StyledButton color="inherit" component={Link} to="/" startIcon={<HomeIcon sx={{ fontSize: '1.5rem' }} />} fullWidth>
                  Home
                </StyledButton>
                <StyledButton color="inherit" component={Link} to="/shop" startIcon={<StoreIcon sx={{ fontSize: '1.5rem' }} />} fullWidth>
                  Shop
                </StyledButton>
                <StyledButton color="inherit" component={Link} to="/wishlist" startIcon={<FavoriteIcon sx={{ fontSize: '1.5rem' }} />} fullWidth>
                  Wishlist
                </StyledButton>
                <StyledButton color="inherit" component={Link} to="/cart" startIcon={<ShoppingCartIcon sx={{ fontSize: '1.5rem' }} />} fullWidth>
                  Cart
                </StyledButton>
                <StyledButton color="inherit" component={Link} to="/orders" startIcon={<ShoppingBagIcon sx={{ fontSize: '1.5rem' }} />} fullWidth>
                  Orders
                </StyledButton>
              </MobileMenu>
            </>
          ) : (
            <MenuContainer>
              <StyledButton
                color="inherit"
                component={Link}
                to={userLoggedIn ? "#" : "/login"}
                onClick={userLoggedIn ? handleLogout : null}
                startIcon={<AccountCircleIcon sx={{ fontSize: '1.5rem' }} />}
              >
                {userLoggedIn ? "Logout" : "Login"}
              </StyledButton>
              {userLoggedIn && (
                <StyledButton
                  color="inherit"
                  component={Link}
                  to="/profile"
                  startIcon={<AccountCircleIcon sx={{ fontSize: '1.5rem' }} />}
                >
                  Profile
                </StyledButton>
              )}
              <StyledButton color="inherit" component={Link} to="/" startIcon={<HomeIcon sx={{ fontSize: '1.5rem' }} />}>
                Home
              </StyledButton>
              <StyledButton color="inherit" component={Link} to="/shop" startIcon={<StoreIcon sx={{ fontSize: '1.5rem' }} />}>
                Shop
              </StyledButton>
              <StyledButton color="inherit" component={Link} to="/wishlist" startIcon={<FavoriteIcon sx={{ fontSize: '1.5rem' }} />}>
                Wishlist
              </StyledButton>
              <StyledButton color="inherit" component={Link} to="/cart" startIcon={<ShoppingCartIcon sx={{ fontSize: '1.5rem' }} />}>
                Cart
              </StyledButton>
              <StyledButton color="inherit" component={Link} to="/orders" startIcon={<ShoppingBagIcon sx={{ fontSize: '1.5rem' }} />}>
                Orders
              </StyledButton>
            </MenuContainer>
          )}
        </div>
      </Toolbar>
    </StyledAppBar>
  );
}

export default Navbar;
