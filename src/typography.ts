import { TypographyOptions } from "@mui/material/styles/createTypography";
import { BCPalette } from "./palette";

export const TypographyStyles: TypographyOptions = {
  fontFamily: '"BC Sans","Noto Sans",Verdana,Arial,sans-serif',
  h1: {
    fontWeight: 700,
    fontSize: "2.25rem",
    lineHeight: "1.5rem",
    color: BCPalette.typography.primary,
  },
  h2: {
    fontWeight: 700,
    fontSize: "2rem",
    lineHeight: "1.5rem",
    color: BCPalette.typography.primary,
  },
  h3: {
    fontWeight: 700,
    fontSize: "1.75rem",
    lineHeight: "1.5rem",
    color: BCPalette.typography.primary,
  },
  h4: {
    fontWeight: 700,
    fontSize: "1.5rem",
    lineHeight: "1.5rem",
    color: BCPalette.typography.primary,
  },
  h5: {
    fontWeight: 700,
    fontSize: "1.25rem",
    lineHeight: "1.5rem",
    color: BCPalette.typography.primary,
  },
  h6: {
    fontWeight: 700,
    fontSize: "1.125rem",
    lineHeight: "1.5rem",
    color: BCPalette.typography.primary,
  },
  subtitle1: {
    fontSize: "1.125rem",
    lineHeight: "1.5rem",
    fontWeight: 400,
    color: BCPalette.typography.primary,
  },
  body1: {
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: "1.5rem",
    color: BCPalette.typography.secondary,
  },
  body2: {
    fontWeight: 400,
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    color: BCPalette.typography.secondary,
  },
  caption: {
    fontWeight: 400,
    fontSize: "0.75rem",
    lineHeight: "1.25rem",
    color: BCPalette.typography.secondary,
  },
  button: {
    fontWeight: 400,
    fontSize: "1rem",
    textTransform: "none",
    lineHeight: "1.5rem",
  },
};

export default TypographyStyles;
