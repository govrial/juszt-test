import React, {FC} from "react";
import {AppBar, Box, CssBaseline, Toolbar, Typography} from "@mui/material";
import {Outlet, ScrollRestoration} from "react-router-dom";

const PageLayout: FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <Box sx={{minHeight: '100vh'}}>
      <CssBaseline />
      <AppBar position="relative" sx={{width: '100vw'}}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {children}
      </main>
      <ScrollRestoration />
      <Outlet />
    </Box>
  );
};

export default PageLayout;