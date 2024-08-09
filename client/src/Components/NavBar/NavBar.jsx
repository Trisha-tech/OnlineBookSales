import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, useMediaQuery, useTheme, styled } from '@mui/material';
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

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#002147', // Adjust color to your preference
});

const StyledButton = styled(Button)({
  fontSize: '1rem', // Adjust font size
  '&:hover': {
    color: '#FFD700', // Adjust hover color
    textDecoration: 'underline', // Underline on hover
  },
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
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, fontSize: '1.5rem' }}>
          Book4u
        </Typography>
        <IconButton onClick={toggleDarkMode} style={{ marginRight: '10px' }}>
          <img src={darkMode ? sunIcon : moonIcon} alt="Toggle Dark Mode" style={{ width: '20px', height: '20px' }} />
        </IconButton>
        {isMobile ? (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuClick}
          >
            <MenuIcon sx={{ fontSize: '2rem' }} />
          </IconButton>
        ) : (
          <div className='flex gap-4'>
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
          </div>
        )}
      </Toolbar>
      {/* Conditional rendering for the mobile menu */}
      {isMobile && (
        <div style={{ display: openMenu ? 'block' : 'none' }}>
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
        </div>
      )}
    </StyledAppBar>
  );
}

export default Navbar;