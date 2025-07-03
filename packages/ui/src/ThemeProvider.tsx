import React from "react";
import { ConfigProvider, theme as antdTheme, type ThemeConfig } from "antd";

export const theme: ThemeConfig = {
  algorithm: antdTheme.darkAlgorithm,
  token: {
    colorPrimary: "#1DA57A",
  },
  components: {
    Button: {
      // md
      controlHeight: 40,
      fontSize: 16,
      // lg
      controlHeightLG: 48,
      fontSizeLG: 16,
      // sm
      controlHeightSM: 32,
      fontSizeSM: 14,
    },
  },
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <ConfigProvider theme={theme}>{children}</ConfigProvider>;
};
