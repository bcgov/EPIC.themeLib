import { Components } from "@mui/material";
import Palette from "./palette";

export const ComponentStyles: Components = {
  // MuiPaper: {
  //   styleOverrides: {
  //     root: {
  //       boxShadow: "none",
  //     },
  //   },
  // },
  MuiAccordion: {
    styleOverrides: {
      root: {
        boxShadow: "none",
      },
    },
  },
  MuiDialogActions: {
    styleOverrides: {
      root: {
        "&>:not(:first-of-type)": {
          marginLeft: "16px",
        },
      },
    },
  },
  MuiDialog: {
    styleOverrides: {
      paper: ({ ownerState }) => ({
        ...(ownerState.maxWidth === "md" && {
          maxWidth: "680px",
        }),
        ...(ownerState.maxWidth === "lg" && {
          maxWidth: "832px",
        }),
      }),
    },
  },
  MuiButton: {
    styleOverrides: {
      root: ({ ownerState }) => ({
        boxShadow: "none",
        fontWeight: 700,
        fontFamily: "BC Sans",
        padding: "0.75rem 1rem",
        ...(ownerState.size === "medium" && {
          fontSize: "0.875rem",
          lineHeight: "1rem",
          height: "2.5rem",
        }),
        ...(ownerState.size === "large" && {
          fontSize: "1rem",
          lineHeight: "1.5rem",
          height: "3rem",
        }),
        ...((ownerState.variant === "contained" &&
          ownerState.color === "primary" && {
            "&:hover": {
              backgroundColor: Palette.primary.light,
              boxShadow: "none",
            },
            "&:active": {
              backgroundColor: Palette.primary.dark,
            },
            "&:disabled": {
              backgroundColor: Palette.neutral.light,
              color: Palette.white,
            },
          }) ||
          (ownerState.color === "secondary" && {
            "&:hover": {
              backgroundColor: Palette.secondary.light,
              boxShadow: "none",
            },
            "&:active": {
              backgroundColor: Palette.secondary.dark,
              color: Palette.white,
            },
            "&:disabled": {
              backgroundColor: Palette.neutral.light,
              color: Palette.white,
            },
          })),
        ...(ownerState.variant === "outlined" &&
          ownerState.color === "primary" && {
            background: Palette.white,
            border: `2px solid ${Palette.primary.main}`,
            "&:hover": {
              backgroundColor: Palette.primary.main,
              border: `2px solid ${Palette.primary.main}`,
              color: Palette.white,
              boxShadow: "none",
            },
            "&:active": {
              backgroundColor: Palette.primary.dark,
              color: Palette.white,
            },
            "&:disabled": {
              border: `2px solid ${Palette.neutral.light}`,
              backgroundColor: Palette.white,
              color: Palette.neutral.light,
            },
          }),
        ...(ownerState.variant === "text" &&
          ownerState.color === "primary" && {
            background: Palette.white,
            border: `2px solid ${Palette.white}`,
            color: Palette.primary.accent.main,
            borderRadius: "4px",
            "&:hover": {
              backgroundColor: Palette.neutral.bg.main,
              border: `2px solid ${Palette.neutral.bg.main}`,
              boxShadow: "none",
            },
            "&:active": {
              backgroundColor: Palette.white,
              border: `2px solid ${Palette.primary.accent.light}`,
            },
            "&:disabled": {
              border: `2px solid ${Palette.white}`,
              backgroundColor: Palette.white,
              color: Palette.neutral.light,
            },
          }),
      }),
    },
    defaultProps: {
      disableRipple: true,
    },
  },
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
    },
  },
  MuiRadio: {
    defaultProps: {
      disableRipple: true,
    },
    styleOverrides: {
      root: {
        "&.Mui-checked": {
          color: Palette.primary.accent.main,
        },
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        "&.MuiOutlinedInput-root": {
          backgroundColor: Palette.white,
          "&.Mui-disabled": {
            backgroundColor: Palette.neutral.bg.dark,
          },
          "& fieldset": {
            border: `2px solid ${Palette.neutral.accent.light}`,
          },
          "&:hover fieldset": {
            borderColor: Palette.primary.accent.light,
          },
          "&.Mui-focused fieldset": {
            borderColor: Palette.primary.accent.light,
          },
          "&.Mui-disabled fieldset": {
            borderColor: Palette.neutral.accent.light,
          },
        },
      },
    },
  },
  MuiCheckbox: {
    styleOverrides: {
      root: {
        "&.Mui-disabled svg": {
          fill: `${Palette.neutral.bg.dark} !important`,
        },
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        border: 0,
      },
    },
    defaultProps: {
      size: "small",
    },
  },
  MuiLink: {
    defaultProps: {
      color: Palette.primary.accent.main,
    },
  },
  MuiFormLabel: {
    defaultProps: {
      focused: false,
    },
  },
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        backgroundColor: Palette.neutral.accent.dark,
        color: Palette.white,
        borderRadius: "4px",
        padding: "4px 8px",
        fontSize: "0.75rem",
        maxWidth: "300px",
        margin: "2px",
        overflowWrap: "break-word",
        fontWeight: 400,
        lineHeight: "1rem",
        textAlign: "center",
      },
      tooltipArrow: {
        backgroundColor: Palette.neutral.accent.dark,
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        fontSize: "1rem",
      },
    },
  },
  MuiCssBaseline: {
    styleOverrides: {
      "*": {
        scrollbarWidth: "thin",
        scrollbarColor: "#B7B7B7 transparent",
        "&::-webkit-scrollbar": {
          width: 6,
          height: 6,
          backgroundColor: "transparent",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "transparent",
        },
        "&::-webkit-scrollbar-thumb": {
          borderRadius: 6,
          backgroundColor: "#B7B7B7",
          minHeight: 24,
          minWidth: 24,
        },
        "&::-webkit-scrollbar-thumb:focus": {
          backgroundColor: "#adadad",
        },
        "&::-webkit-scrollbar-thumb:active": {
          backgroundColor: "#adadad",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#adadad",
        },
        "&::-webkit-scrollbar-corner": {
          backgroundColor: "transparent",
        },
      },
    },
  },
};

export default ComponentStyles;
