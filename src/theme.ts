import { createTheme, ThemeOptions, Theme } from "@mui/material/styles";
import Palette from "./palette";
import TypographyStyles from "./typography";
import ComponentStyles from "./components";

import './fonts/BCSans-Bold.woff2';
import './fonts/BCSans-Light.woff2';
import './fonts/BCSans-Regular.woff2';


const baseThemeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: Palette.primary.main,
      light: Palette.primary.light,
      dark: Palette.primary.dark,
      contrastText: Palette.white,
    },
    secondary: {
      main: Palette.secondary.main,
      dark: Palette.secondary.dark,
      light: Palette.secondary.light,
      contrastText: Palette.black,
    },
    error: {
      main: Palette.error.main,
      dark: Palette.error.dark,
      light: Palette.error.light,
    },
    
  },
  components: ComponentStyles,
  typography: TypographyStyles
};

const createAppTheme = (customOptions?: ThemeOptions): Theme => {
  return createTheme({
    ...baseThemeOptions,
    ...customOptions,
  });
};

export default createAppTheme;
