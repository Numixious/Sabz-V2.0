import "./ResponsiveAppBar.css";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
import { createTheme } from "@mui/material/styles";
import { red, green } from "@mui/material/colors";
import NavigationImg from "./NavigationImg";
import { Link } from "react-router-dom";

// const pages = ["خانه", "آموزش"];
// const pages = [
//   { name: "خانه", url: "/" },
//   { name: "آموزش", url: "/Training" },
//   // { name: "Contact", url: "/contact" },
// ];
// const settings = ["حساب کاربری", "داشبورد", "خروج"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const theme = createTheme({
    palette: {
      primary: green,
      secondary: red,
    },
  });

  return (
    <AppBar position="sticky" theme={theme} color="primary" className="NavBar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              direction: "rtl",
            }}
          >
            <NavigationImg />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center" className="HamburgerMenu">
                  <Link to="/" className="">
                    خانه
                  </Link>
                  <Link to="/Training" className="TrainingPadding">
                    آموزش
                  </Link>
                  <Link to="/Profile" className="TrainingPadding">
                    حساب کاربری
                  </Link>
                  <Link to="/Register" className="">
                    ثبت نام
                  </Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              direction: "rtl",
            }}
          >
            <NavigationImg />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              paddingRight: "2rem",
            }}
          >
            <Link to="/" className="NavBarLinks">
              خانه
            </Link>
            <Link to="/Training" className="NavBarLinks">
              آموزش
            </Link>
            <Link to="/Profile" className="NavBarLinks">
              حساب کاربری
            </Link>
            <Link to="/Register" className="NavBarLinks">
              ثبت نام
            </Link>

            {/* {pages.map((page) => (
              <Button
                href="/"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block", fontSize: 17 }}
              >
                {page}
              </Button>
            ))} */}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center" className="HamburgerMenu">
                  <Link to="/Profile" className="">
                    حساب کاربری
                  </Link>
                  <Link to="/Profile" className="TrainingPadding">
                    داشبورد
                  </Link>
                  <Link to="/Profile" className="">
                    خروج{" "}
                  </Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
