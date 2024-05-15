import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, useMediaQuery, useTheme, styled } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StoreIcon from '@mui/icons-material/Store';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Link } from 'react-router-dom';

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

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: '1.5rem' }}>
          Book4u
        </Typography>
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
            <StyledButton color="inherit" component={Link} to="/login" startIcon={<AccountCircleIcon sx={{ fontSize: '1.5rem' }} />}>
              Login
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
          <StyledButton color="inherit" component={Link} to="/login" startIcon={<AccountCircleIcon sx={{ fontSize: '1.5rem' }} />} fullWidth>
            Login
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
        </div>
      )}
    </StyledAppBar>
  );
}

export default Navbar;
