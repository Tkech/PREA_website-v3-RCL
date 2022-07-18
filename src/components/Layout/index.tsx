import React from "react";
import { GlobalFonts, GlobalStyle } from "../../utils/styles";

export const Layout = ({ children }: any) => {
  return (
    <>
      <GlobalFonts />
      <GlobalStyle />
      {children}
    </>
  );
};
