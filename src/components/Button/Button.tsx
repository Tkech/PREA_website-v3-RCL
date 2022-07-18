import React from "react";
import styled from "styled-components";
import { Layout } from "../Layout";

export interface ButtonProps {
  label: string;
}

export const Button = (props: ButtonProps) => {
  return (
    // <Layout>
    <ButtonWrapper>{props.label}</ButtonWrapper>
    // </Layout>
  );
};

export const ButtonWrapper = styled.div`
  background: ${(p) => p.theme.palette.special.success};
  margin-bottom: ${(p) => p.theme.spacing(5)};
  ${(p) => p.theme.font("h_28mb")};
  ${(p) => p.theme.breakpoints.down("lg")} {
    ${(p) => p.theme.font("h_78b")};
  }
  ${(p) => p.theme.breakpoints.down("md")} {
    background: ${(p) => p.theme.palette.special.danger};
  }
`;
