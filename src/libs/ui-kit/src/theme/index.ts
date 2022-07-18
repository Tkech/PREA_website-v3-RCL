import { createTheme, Theme } from "@mui/material/styles";

import { ThemePalette, Types } from "../../styled";

export enum DeviceSizes {
  xs = 360,
  sm = 768,
  md = 1024,
  lg = 1366,
  xl = 1920,
}

const palette: ThemePalette = {
  common: {
    black: "#323434",
    white: "#FBFCFD",
  },
  background: {
    default: "#FBFCFD",
  },
  grey: {
    100: "#F2F2F3",
    500: "#8C8E91",
    700: "#808080",
  },
  info: {
    main: "#F5DF4D", //F5DF4D
    hover: "#f6d605",
    blue: "#1546f5",
  },
  primary: {
    main: "#93A9D2",
    hover: "#5880cb",
  },
};

/**
 *
 * @param sb (semiBold) - 600
 * @param b (Bold) - 575
 * @param mb (middle Bold) - 550
 * @param m  (medium)- 500
 * @param br (bold regular) - 475
 * @param mr (middle regular) - 450
 * @param r (regular) - 400
 */

const types: Types = {
  h_93sb: {
    fontSize: 93,
    lineHeight: 103,
    fontWeight: 600,
    letterSpacing: -0.03,
  },
  h_78sb: {
    fontSize: 68,
    lineHeight: 78,
    fontWeight: 600,
    letterSpacing: -0.02,
  },
  h_78b: {
    fontSize: 68,
    lineHeight: 78,
    fontWeight: 575,
    letterSpacing: -0.02,
  },
  h_68mr: {
    fontSize: 68,
    lineHeight: 78,
    fontWeight: 450,
    letterSpacing: -0.02,
  },

  h_68b: {
    fontSize: 68,
    lineHeight: 78,
    fontWeight: 575,
    letterSpacing: -0.02,
  },
  h_58sb: {
    fontSize: 58,
    lineHeight: 68,
    fontWeight: 600,
    letterSpacing: -0.02,
  },
  h_54sb: {
    fontSize: 54,
    lineHeight: 62,
    fontWeight: 600,
    letterSpacing: -0.02,
  },
  h_48sb: {
    fontSize: 48,
    lineHeight: 58,
    fontWeight: 600,
    letterSpacing: -0.02,
  },
  h_33sb: {
    fontSize: 33,
    lineHeight: 43,
    fontWeight: 600,
    letterSpacing: -0.02,
  },
  h_32mb: {
    fontSize: 32,
    lineHeight: 42,
    fontWeight: 550,
    letterSpacing: -0.02,
  },

  h_28mb: {
    fontSize: 28,
    lineHeight: 38,
    fontWeight: 550,
    letterSpacing: -0.02,
  },
  h_28sb: {
    fontSize: 28,
    lineHeight: 38,
    fontWeight: 600,
    letterSpacing: -0.02,
  },
  h_26br: {
    fontSize: 26,
    lineHeight: 36,
    fontWeight: 475,
    letterSpacing: -0.02,
  },
  h_26sb: {
    fontSize: 26,
    lineHeight: 36,
    fontWeight: 600,
    letterSpacing: -0.02,
  },

  h_24br: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: 475,
    letterSpacing: -0.02,
  },

  h_21mb: {
    fontSize: 21,
    lineHeight: 25,
    fontWeight: 550,
    letterSpacing: 0,
  },

  h_18m: {
    fontSize: 18,
    lineHeight: 22,
    fontWeight: 500,
    letterSpacing: 0,
  },
  h_16mb: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: 550,
    letterSpacing: 0,
  },

  p_24mb: {
    fontSize: 24,
    lineHeight: 34,
    fontWeight: 550,
    letterSpacing: -0.02,
  },
  p_24br: {
    fontSize: 24,
    lineHeight: 34,
    fontWeight: 475,
    letterSpacing: -0.02,
  },
  p_24sb: {
    fontSize: 24,
    lineHeight: 34,
    fontWeight: 600,
    letterSpacing: -0.02,
  },
  p_21br: {
    fontSize: 21,
    lineHeight: 31,
    fontWeight: 475,
    letterSpacing: -0.02,
  },
  p_18mb: {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: 550,
    letterSpacing: -0.02,
  },
  p_16mr: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 450,
    letterSpacing: -0.02,
  },
  btn_26br: {
    fontSize: 26,
    lineHeight: 36,
    fontWeight: 475,
    letterSpacing: -0.02,
  },
};

const inputStyles = {
  ...types.body2,
  padding: "12px 16px",
  color: palette.common.black,
};

export const theme: Theme = createTheme({
  breakpoints: {
    values: {
      xs: DeviceSizes.xs,
      sm: DeviceSizes.sm,
      md: DeviceSizes.md,
      lg: DeviceSizes.lg,
      xl: DeviceSizes.xl,
    },
  },

  components: {
    MuiFilledInput: {
      styleOverrides: {
        input: {
          ...inputStyles,
        },
        root: {
          borderRadius: 5,
          color: palette.common.black,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          ...inputStyles,
        },
        root: {
          borderRadius: 5,
          color: palette.common.black,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          ...inputStyles,
        },
        root: {
          borderRadius: 5,
          color: palette.common.black,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          color: palette.common.black,
        },
      },
    },
  },

  palette,

  spacing(...values) {
    const FACTOR = 6;
    return values
      .map((value) => (value === "auto" ? value : `${value * FACTOR}px`))
      .join(" ");
  },

  font(type) {
    const { fontSize, lineHeight, fontWeight, fontFamily, letterSpacing } =
      types[type];
    return `
      font-size: ${fontSize}px;
      line-height: ${lineHeight}px;
      font-weight: ${fontWeight};
      font-family: ${fontFamily ?? '"Inter", sans-serif'};
      letter-spacing: ${letterSpacing}rem;
    `;
  },
});
