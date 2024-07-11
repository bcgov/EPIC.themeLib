import { TypographyOptions } from "@mui/material/styles/createTypography";

export const TypographyStyles: TypographyOptions = {
  fontFamily: '"BC Sans","Noto Sans",Verdana,Arial,sans-serif',
  h1: {
    fontWeight: 400,
    fontSize: "2rem",
    lineHeight: "1.5rem",
  },
  h2: {
    fontWeight: 400,
    fontSize: "1.75rem",
    lineHeight: "1.4rem",
    letterSpacing: "-1.12px",
  },
  h3: {
    fontSize: "1.5rem",
    lineHeight: "1.3rem",
    fontWeight: 400,
  },
  h4: {
    fontSize: "1.25rem",
    lineHeight: "1.6rem",
    fontWeight: 400,
  },
  subtitle1: {
    fontSize: "1.125rem",
    lineHeight: "1.3rem",
    fontWeight: 400,
  },
  caption: {
    fontWeight: 400,
    fontSize: "0.8125rem",
    lineHeight: "1.2rem",
  },
  body1: {
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: "1.5rem",
  },
  button: {
    fontWeight: 700,
    fontSize: "1.125rem",
    textTransform: "none",
  },
};

export default TypographyStyles;
