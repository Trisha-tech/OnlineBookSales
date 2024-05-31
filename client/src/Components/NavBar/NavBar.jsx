import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, useMediaQuery, useTheme, styled } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StoreIcon from '@mui/icons-material/Store';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import { useToast } from "../../Context/ToastContext";
import { useSelector } from 'react-redux';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';

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

  const { userLoggedIn, setUserLoggedIn } = useAuth();
  let navigate = useNavigate();
  const { showToast } = useToast();

  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.WishList); // 

  const handleMenuClick = () => {
    setOpenMenu(!openMenu);
  };

  const handleLogout = () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        localStorage.removeItem('token'); // Remove the token from sessionStorage
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
          <div className='flex items-center gap-4'>
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
              <StyledButton c
                color="inherit"
                component={Link}
                to="/profile"
                startIcon={<AccountCircleIcon sx={{ fontSize: '1.5rem' }} />}
              >
                Profile
              </StyledButton>
            )}
            <StyledButton color="inherit" component={Link} to="/shop" startIcon={<StoreIcon sx={{ fontSize: '1.5rem' }} />}>
              Shop
            </StyledButton>
            <NavLink to="/wishlist" className="relative flex items-center">
              <FaHeart className="text-xl mr-1" />
              <span>Wishlist</span>
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                  {wishlist.length}
                </span>
              )}
            </NavLink>
            <NavLink to="/cart" className="relative flex items-center hover:">
              <FaShoppingCart className="text-xl mr-1" />
              <span>Cart</span>
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                  {cart.length}
                </span>
              )}
            </NavLink>
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
          <NavLink to="/wishlist" className="relative flex hover:color=[#FFD700] items-center">
            <FaHeart className="text-2xl mr-1 hover:text-color-[#FFD700]" />
            <span>Wishlist</span>
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                {wishlist.length}
              </span>
            )}
          </NavLink>
          <NavLink to="/cart" className="relative flex items-center">
            <FaShoppingCart className="text-2xl mr-1" />
            <span>Cart</span>
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                {cart.length}
              </span>
            )}
          </NavLink>
          <StyledButton color="inherit" component={Link} to="/orders" startIcon={<ShoppingBagIcon sx={{ fontSize: '1.5rem' }} />} fullWidth>
            Orders
          </StyledButton>
        </div>
      )}
    </StyledAppBar>
  );
}

export default Navbar;
