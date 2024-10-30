import React, { useState, useMemo } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  useMediaQuery,
  useTheme,
  styled,
  Tooltip,
} from "@mui/material";
import {
  Menu as MenuIcon,
  AccountCircle as AccountCircleIcon,
  Store as StoreIcon,
  Favorite as FavoriteIcon,
  ShoppingCart as ShoppingCartIcon,
  ShoppingBag as ShoppingBagIcon,
  Home as HomeIcon,
} from "@mui/icons-material";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { useToast } from "../../Context/ToastContext";
import sunIcon from "../../assets/sun.png"; // Adjust the path as necessary
import moonIcon from "../../assets/moon.png"; // Adjust the path as necessary
import logo from "../../assets/Logo.png"; // Adjust the path as necessary
import SearchBar from "../SearchBar";
import ScrollProgressBar from "./ScrollProgressBar";

const StyledAppBar = styled(AppBar)(({ darkMode }) => ({
  backgroundColor: darkMode ? "black" : "#002147",
}));

const Logo = styled("img")({
  width: "220px",
  height: "auto",
  marginRight: "auto",
});

const NavButton = styled(Button)(({ isActive }) => ({
  fontSize: "1rem",
  color: isActive ? "#FFD700" : "#FFF",
  textDecoration: isActive ? "underline" : "none",
  "&:hover": {
    color: "#FFD700",
    textDecoration: "underline",
  },
}));

const MenuContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginLeft: "auto",
});

const MobileMenuContainer = styled("div")(({ open }) => ({
  display: open ? "flex" : "none",
  flexDirection: "column",
  position: "fixed",
  top: 0,
  right: 0,
  width: "100%",
  height: "100vh",
  backgroundColor: "#002147",
  padding: "20px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  zIndex: 1000,
  overflowY: "auto",
}));

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => (
  <Tooltip title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}>
    <IconButton onClick={toggleDarkMode}>
      <img
        src={darkMode ? sunIcon : moonIcon}
        alt="Toggle Dark Mode"
        style={{ width: "20px", height: "20px" }}
      />
    </IconButton>
  </Tooltip>
);

function Navbar({ darkMode, toggleDarkMode }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [openMenu, setOpenMenu] = useState(false);
  const { userLoggedIn, setUserLoggedIn } = useAuth();
  const navigate = useNavigate();
  const { showToast } = useToast();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const handleMenuClick = () => setOpenMenu((prev) => !prev);

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    setUserLoggedIn(false);
    localStorage.removeItem("token");
    navigate("/", { replace: true });
    showToast("success", "", "Logged out successfully");
  };

  const navLinks = useMemo(
    () => [
      { label: "Home", to: "/", icon: <HomeIcon /> },
      { label: "Shop", to: "/shop", icon: <StoreIcon /> },
      { label: "Wishlist", to: "/wishlist", icon: <FavoriteIcon /> },
      { label: "Cart", to: "/cart", icon: <ShoppingCartIcon /> },
      ...(userLoggedIn
        ? [
            { label: "Profile", to: "/profile", icon: <AccountCircleIcon /> },
            { label: "Orders", to: "/orders", icon: <ShoppingBagIcon /> },
            { label: "Logout", to: "#", onClick: handleLogout, icon: <AccountCircleIcon /> },
          ]
        : [{ label: "Login", to: "/login", icon: <AccountCircleIcon /> }]),
    ],
    [userLoggedIn]
  );

  return (
    <StyledAppBar position="sticky" darkMode={darkMode}>
      <Toolbar style={{ justifyContent: "space-between" }}>
        <IconButton component={Link} to="/">
          <Logo src={logo} alt="Logo" />
        </IconButton>
        {isMobile ? (
          <>
            <IconButton onClick={toggleDarkMode}>
              <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </IconButton>
            <IconButton onClick={handleMenuClick}>
              <MenuIcon sx={{ fontSize: "2rem" }} />
            </IconButton>
            <MobileMenuContainer open={openMenu}>
              {navLinks.map((link) => (
                <NavButton
                  key={link.label}
                  component={Link}
                  to={link.to}
                  onClick={link.onClick || handleMenuClick}
                  startIcon={link.icon}
                  isActive={isActive(link.to)}
                  fullWidth
                >
                  {link.label}
                </NavButton>
              ))}
            </MobileMenuContainer>
          </>
        ) : (
          <MenuContainer>
            <SearchBar />
            {navLinks.map((link) => (
              <NavButton
                key={link.label}
                component={Link}
                to={link.to}
                onClick={link.onClick}
                startIcon={link.icon}
                isActive={isActive(link.to)}
              >
                {link.label}
              </NavButton>
            ))}
            <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          </MenuContainer>
        )}
      </Toolbar>
    </StyledAppBar>
  );
}

export default Navbar;
