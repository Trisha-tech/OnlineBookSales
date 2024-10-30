import React, { useState } from "react";
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
import sunIcon from "../../assets/sun.png";
import moonIcon from "../../assets/moon.png";
import logo from "../../assets/Logo.png";
import SearchBar from "../SearchBar";
import ScrollProgressBar from "./ScrollProgressBar";

const StyledAppBar = styled(AppBar)(({ theme, darkMode }) => ({
  backgroundColor: darkMode ? "black" : "#002147",
}));

const Logo = styled("img")({
  width: "220px",
  height: "auto",
  marginRight: "auto",
});

const StyledButton = styled(Button)(({ isActive }) => ({
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

const MobileMenu = styled("div")(({ theme, open }) => ({
  display: open ? "flex" : "none",
  flexDirection: "column",
  position: "fixed",
  top: 0,
  right: 0,
  backgroundColor: "#002147",
  width: "100%",
  height: "100vh",
  padding: "20px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  zIndex: 1000,
  overflowY: "auto",
  transition: "transform 0.4s ease-in-out",
}));

function Navbar({ darkMode, toggleDarkMode }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [openMenu, setOpenMenu] = useState(false);
  const { userLoggedIn, setUserLoggedIn } = useAuth();
  const navigate = useNavigate();
  const { showToast } = useToast();
  const location = useLocation();

  const handleMenuClick = () => setOpenMenu(!openMenu);
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    localStorage.removeItem("token");
    setUserLoggedIn(false);
    navigate("/", { replace: true });
    showToast("success", "", "Logged out successfully");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <StyledAppBar position="sticky" darkMode={darkMode}>
        <Toolbar>
          <IconButton component={Link} to="/">
            <Logo src={logo} alt="Logo" />
          </IconButton>
          {isMobile ? (
            <>
              <Tooltip
                title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                <IconButton onClick={toggleDarkMode} style={{ marginRight: "10px" }}>
                  <img src={darkMode ? sunIcon : moonIcon} alt="Toggle Dark Mode" style={{ width: "20px", height: "20px" }} />
                </IconButton>
              </Tooltip>
              <IconButton onClick={handleMenuClick}>
                <MenuIcon sx={{ fontSize: "2rem" }} />
              </IconButton>
              <MobileMenu open={openMenu}>
                <IconButton onClick={handleMenuClick} style={{ color: "#fff", marginBottom: "20px" }}>
                  Close
                </IconButton>
                {[
                  { label: "Home", path: "/", icon: <HomeIcon /> },
                  { label: "Shop", path: "/shop", icon: <StoreIcon /> },
                  { label: "Wishlist", path: "/wishlist", icon: <FavoriteIcon /> },
                  { label: "Cart", path: "/cart", icon: <ShoppingCartIcon /> },
                  ...(userLoggedIn ? [{ label: "Orders", path: "/orders", icon: <ShoppingBagIcon /> }] : []),
                  {
                    label: userLoggedIn ? "Logout" : "Login",
                    path: userLoggedIn ? "#" : "/login",
                    icon: <AccountCircleIcon />,
                    onClick: userLoggedIn ? handleLogout : null,
                  },
                ].map((item, index) => (
                  <StyledButton
                    key={index}
                    color="inherit"
                    component={Link}
                    to={item.path}
                    onClick={item.onClick}
                    isActive={isActive(item.path)}
                    startIcon={item.icon}
                    fullWidth
                    style={{ marginBottom: "15px" }}
                  >
                    {item.label}
                  </StyledButton>
                ))}
              </MobileMenu>
            </>
          ) : (
            <MenuContainer>
              <SearchBar />
              {[
                { label: "Home", path: "/", icon: <HomeIcon /> },
                { label: "Shop", path: "/shop", icon: <StoreIcon /> },
                { label: "Wishlist", path: "/wishlist", icon: <FavoriteIcon /> },
                { label: "Cart", path: "/cart", icon: <ShoppingCartIcon /> },
                ...(userLoggedIn ? [{ label: "Orders", path: "/orders", icon: <ShoppingBagIcon /> }] : []),
                {
                  label: userLoggedIn ? "Logout" : "Login",
                  path: userLoggedIn ? "#" : "/login",
                  icon: <AccountCircleIcon />,
                  onClick: userLoggedIn ? handleLogout : null,
                },
              ].map((item, index) => (
                <StyledButton
                  key={index}
                  color="inherit"
                  component={Link}
                  to={item.path}
                  onClick={item.onClick}
                  isActive={isActive(item.path)}
                  startIcon={item.icon}
                >
                  {item.label}
                </StyledButton>
              ))}
              <Tooltip title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}>
                <IconButton onClick={toggleDarkMode} style={{ marginLeft: "auto", marginRight: "10px" }}>
                  <img src={darkMode ? sunIcon : moonIcon} alt="Toggle Dark Mode" style={{ width: "20px", height: "20px" }} />
                </IconButton>
              </Tooltip>
            </MenuContainer>
          )}
        </Toolbar>
      </StyledAppBar>
    </>
  );
}

export default Navbar;
