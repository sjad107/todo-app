import React from "react";
import { FC } from "../types/types";
import { Box } from "@mui/material";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        position: "relative",
      }}
    >
      <Box component="main" sx={{ width: "100%" }}>
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
