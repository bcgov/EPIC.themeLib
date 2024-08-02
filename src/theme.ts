import { createTheme, ThemeOptions, Theme } from "@mui/material/styles";
import { BCPalette, Palette } from "./palette";
import TypographyStyles from "./typography";
import ComponentStyles from "./components";

import "./fonts/BCSans-Bold.woff2";
import "./fonts/BCSans-Light.woff2";
import "./fonts/BCSans-Regular.woff2";



const baseThemeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: BCPalette.theme.primaryBlue.default,
      light: BCPalette.theme.primaryBlue[10],
      dark: BCPalette.theme.primaryBlue[90],
      contrastText: Palette.white,
    },
    secondary: {
      main: BCPalette.theme.primaryGold.default,
      light: BCPalette.theme.primaryGold[10],
      dark: BCPalette.theme.primaryGold[90],
      contrastText: Palette.black,
    },
    error: {
      main: Palette.error.main,
      dark: Palette.error.dark,
      light: Palette.error.light,
    },
    text: {
      primary: BCPalette.typography.primary,
      secondary: BCPalette.typography.secondary,
      disabled: BCPalette.typography.disabled,
    },
    background: {
      default: BCPalette.components.background.white,
    },
    common: {
      white: BCPalette.theme.gray.white,
      black: BCPalette.theme.gray[110],
    }
  },
  components: ComponentStyles,
  typography: TypographyStyles,
};

const createAppTheme = (customOptions?: ThemeOptions): Theme => {
  return createTheme({
    ...baseThemeOptions,
    ...customOptions,
  });
};

export default createAppTheme;
