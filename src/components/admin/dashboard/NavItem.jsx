import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, ListItem, Typography } from "@mui/material";

const NavItem = ({ href, icon, title }) => {
  const location = useLocation();
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(location.pathname === href);
  }, [location, href]);

  return (
    <Link to={href}>
      <ListItem
        disableGutters
        sx={{
          backgroundColor: active && "rgb(255, 255, 255)",
          "&:hover": {
            backgroundColor: "rgb(255, 255, 255)",
            color: "neutral.900",
            "& .MuiButton-startIcon, & .MuiTypography-root": {
              color: "neutral.900",
            },
          },
          display: "flex",
          mb: 0.5,
          py: 0,
          px: 2,
        }}
      >
        <Button
          startIcon={icon}
          disableRipple
          sx={{
            borderRadius: 1,
            color: active ? "neutral.900" : "neutral.300",
            fontWeight: active && "fontWeightBold",
            justifyContent: "flex-start",
            textAlign: "left",
            textTransform: "none",
            width: "100%",
            "& .MuiButton-startIcon": {
              color: active ? "neutral.900" : "neutral.300",
            },
            "&:hover": {
              backgroundColor: "transparent",
              "& .MuiButton-startIcon": {
                color: "neutral.900",
              },
            },
          }}
        >
          <Typography sx={{ flexGrow: 1 }}>{title}</Typography>
        </Button>
      </ListItem>
    </Link>
  );
};

export default NavItem;
