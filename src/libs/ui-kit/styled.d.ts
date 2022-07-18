import "styled-components";
import "@mui/material/styles";

import { Breakpoints } from "@mui/material/styles";
import {
  ColorPartial,
  CommonColors,
  SimplePaletteColorOptions,
  TypeBackground,
} from "@mui/material/styles/createPalette";

type FontEntry =
  | "h_93sb"
  | "h_78sb"
  | "h_78b"
  | "h_68b"
  | "h_68mr"
  | "h_68b"
  | "h_58sb"
  | "h_54sb"
  | "h_48sb"
  | "h_33sb"
  | "h_32mb"
  | "h_28mb"
  | "h_28sb"
  | "h_26br"
  | "h_26sb"
  | "h_24br"
  | "h_21mb"
  | "h_18m"
  | "h_16mb"
  | "p_24mb"
  | "p_24br"
  | "p_24sb"
  | "p_21br"
  | "p_18mb"
  | "p_16mr"
  | "btn_26br";

interface ThemeSimplePaletteColorOptions extends SimplePaletteColorOptions {
  hover?: string;
  blue?: string;
}

export interface ThemePalette {
  dark: TDarkColor;
  light: TLightColor;
  accent: TAccentColor;
  special: TSpecialColor;
  shadows: TShadows;
}

type TSpecialColor = {
  info: string;
  success: string;
  warning: string;
  danger: string;
};
type TAccentColor = {
  pressed: string;
  primary: string;
  hover: string;
  opacity_05: string;
  opacity_03: string;
  opacity_010: string;
};
interface TLightColor extends TMainColor {
  white: string;
}
interface TDarkColor extends TMainColor {
  black: string;
}

type TMainColor = {
  primary: string;
  secondary: string;
  tertiary: string;
  quaternary: string;
  background: string;
};

type TShadows = {
  lvl_1: string;
  lvl_2: string;
  lvl_3: string;
  lvl_4: string;
};

interface FontProps {
  fontSize: number;
  lineHeight: number;
  fontWeight: number;
  fontFamily?: string;
  letterSpacing: number;
}

type TSpacing = number | "auto";

export type Types = Record<FontEntry, FontProps>;

interface CustomThemeOptions {
  palette: ThemePalette;
  spacing(...values: TSpacing[]): string;
  font(type: FontEntry): string;
}

declare module "@mui/material" {
  export interface ThemeOptions extends CustomThemeOptions {
    spacing(...values: TSpacing[]): string;
  }

  // eslint-disable-next-line
  export interface PaletteOptions extends ThemePalette {}
}

declare module "styled-components" {
  export interface DefaultTheme extends CustomThemeOptions {
    breakpoints: Breakpoints;
  }
}
