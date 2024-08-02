import "./fonts.css";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    dashed: true;
  }
}

export { BCPalette } from "./palette";

export { default as createAppTheme } from "./theme";
