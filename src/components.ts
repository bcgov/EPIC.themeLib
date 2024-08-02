import { Components } from "@mui/material";
import { BCPalette, Palette } from "./palette";
import { color, display, fontWeight, lineHeight } from "@mui/system";

const activeBorder = {
  boxShadow: "none",
  outlineOffset: ".125rem",
  outline: `.125rem solid ${BCPalette.components.border.active}`,
};

export const ComponentStyles: Components = {
  MuiAppBar: {
    styleOverrides: {
      root: {
        boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.10)",
      }
    }
  },
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
      root: ({ ownerState }) => {
        let style = {
          boxShadow: "none",
          fontFamily: "BC Sans",
          padding: "0.5rem 1rem",
        };
        if (ownerState.size === "small") {
          style = {
            ...style,
            ...{ fontSize: "0.875rem", lineHeight: "1rem", height: "2rem" },
          };
        }
        if (ownerState.size === "large") {
          style = {
            ...style,
            ...{ fontSize: "1.125rem", lineHeight: "1.5rem", height: "3rem" },
          };
        }
        if (ownerState.variant === "contained") {
          if (ownerState.color === "primary") {
            style = {
              ...style,
              ...{
                backgroundColor: BCPalette.components.button.primary.default,
                color: BCPalette.typography.primaryInvert,
                "&:hover": {
                  backgroundColor: BCPalette.components.button.primary.hover,
                  boxShadow: "none",
                },
                "&:active": {
                  ...activeBorder,
                  backgroundColor: BCPalette.components.button.primary.default,
                },
                "&:disabled": {
                  backgroundColor: BCPalette.components.button.primary.disabled,
                  color: BCPalette.typography.disabled,
                },
              },
            };
          } else if (ownerState.color === "secondary") {
            style = {
              ...style,
              ...{
                backgroundColor: BCPalette.components.button.secondary.default,
                border: `1px solid ${BCPalette.components.border.dark}`,
                padding: "0.438rem 1rem",
                color: BCPalette.typography.primary,
                "&:hover": {
                  backgroundColor: BCPalette.components.button.secondary.hover,
                  boxShadow: "none",
                },
                "&:active": {
                  ...activeBorder,
                  backgroundColor:
                    BCPalette.components.button.secondary.default,
                },
                "&:disabled": {
                  backgroundColor:
                    BCPalette.components.button.secondary.disabled,
                  color: BCPalette.typography.disabled,
                  borderColor: BCPalette.components.border.light,
                },
              },
            };
          } else if (ownerState.color === "error") {
            style = {
              ...style,
              ...{
                backgroundColor: BCPalette.components.button.danger.default,
                color: BCPalette.typography.primaryInvert,
                "&:hover": {
                  backgroundColor: BCPalette.components.button.danger.hover,
                  boxShadow: "none",
                },
                "&:active": {
                  ...activeBorder,
                  backgroundColor: BCPalette.components.button.danger.hover,
                },
                "&:disabled": {
                  backgroundColor: BCPalette.components.button.danger.disabled,
                  color: BCPalette.typography.disabled,
                },
              },
            };
          }
        } else if (
          ownerState.variant === "outlined" &&
          ownerState.color === "error"
        ) {
          style = {
            ...style,
            ...{
              backgroundColor: BCPalette.components.button.secondary.default,
              border: `1px solid ${BCPalette.components.button.danger.default}`,
              padding: "0.438rem 1rem",
              color: BCPalette.typography.danger,
              "&:hover": {
                backgroundColor: BCPalette.status.danger.light,
                boxShadow: "none",
              },
              "&:active": {
                ...activeBorder,
                backgroundColor: BCPalette.status.danger.light,
              },
              "&:disabled": {
                backgroundColor: BCPalette.components.button.danger.disabled,
                color: BCPalette.typography.disabled,
                borderColor: BCPalette.components.border.light,
              },
            },
          };
        } else if (ownerState.variant === "text") {
          if (ownerState.color === "primary") {
            style = {
              ...style,
              ...{
                background: BCPalette.components.button.tertiary.default,
                color: BCPalette.typography.primary,
                "&:hover": {
                  background: BCPalette.components.button.tertiary.hover,
                  boxShadow: "none",
                },
                "&:active": {
                  ...activeBorder,
                  backgroundColor: BCPalette.components.button.tertiary.hover,
                },
                "&:disabled": {
                  color: BCPalette.typography.disabled,
                },
              },
            };
          } else if (ownerState.color === "secondary") {
            style = {
              ...style,
              ...{
                backgroundColor: BCPalette.components.button.tertiary.default,
                color: BCPalette.typography.link,
                textDecoration: "underline",
                border: "none",
                "&:active": activeBorder,
                "&:disabled": {
                  color: BCPalette.typography.disabled,
                },
              },
            };
          } else if (ownerState.color === "error") {
            style = {
              ...style,
              ...{
                background: BCPalette.components.button.tertiary.default,
                color: BCPalette.typography.danger,
                "&:hover": {
                  background: BCPalette.status.danger.light,
                  boxShadow: "none",
                },
                "&:active": {
                  ...activeBorder,
                  backgroundColor: BCPalette.status.danger.light,
                },
                "&:disabled": {
                  color: BCPalette.typography.disabled,
                },
              },
            };
          }
        }

        return style;
      },
    },
    defaultProps: {
      variant: "contained",
      color: "primary",
      disableRipple: true,
    },
    variants: [
      {
        props: { variant: "dashed" },
        style: {
          textTransform: "none",
          border: `2px dashed ${Palette.primary.accent.light}`,
        },
      },
    ],
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
        "& .MuiInputBase-root": {
          height: "2.5rem",
          fontSize: "1rem",
          color: BCPalette.typography.primary,
          backgroundColor: BCPalette.components.form.default,
          backgroundClip: "padding-box",
          border: `1px solid ${BCPalette.components.border.light}`,
          borderRadius: ".25rem",
          boxShadow: "none",
          transition:
            "border-color .15s ease-in-out, box-shadow .15s ease-in-out",
        },
        "& .MuiInputBase-root:hover": {
          borderColor: BCPalette.components.border.dark,
        },
        "& .MuiInputBase-root:active": {
          ...activeBorder,
          ...{
            borderColor: BCPalette.components.border.dark,
          },
        },
        "& .MuiInputBase-root:focus-within": {
          borderColor: BCPalette.components.border.active,
        },
        "& .MuiInputBase-root fieldset": {
          display: "none",
        },
        "& .MuiInputBase-root.Mui-error": {
          borderColor: BCPalette.typography.danger,
        },
        "& .MuiInputBase-root.Mui-disabled": {
          backgroundColor: BCPalette.components.form.disabled,
          outline: "none",
          borderColor: BCPalette.components.border.light,
        },
        "& .MuiInputLabel-root": {
          position: "static",
          transform: "none",
          fontSize: "0.875rem",
          lineHeight: "21px",
          marginBottom: ".5rem",
          color: BCPalette.typography.secondary,
        },
        "& .MuiInputLabel-shrink": {
          transform: "none",
        },
        "& .MuiInputBase-root MuiInputAdornment-root": {
          color: BCPalette.typography.primary,
        },
        "& .MuiFormHelperText-root": {
          fontSize: "0.875rem",
          color: BCPalette.typography.secondary,
          marginLeft: "0",
        },
        "& .MuiFormHelperText-root.Mui-error": {
          color: BCPalette.typography.danger,
        },
      },
    },
    defaultProps: {
      size: "small",
    },
  },
  MuiFormControl: {
    styleOverrides: {
      root: {
        marginBottom: "1.5rem",
      },
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
