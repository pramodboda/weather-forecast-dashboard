import React from 'react'


import { ThemeProvider, createTheme } from "@mui/material/styles";
import { deepPurple, grey, deepOrange } from "@mui/material/colors";
export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
  mode: "light"
});

export const ColorModeContextProvider = ({ children }) => {
  const [mode, setMode] = React.useState("light");

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
      mode
    }),
    [mode]
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        typography:{
            fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif'
        },
        components: {
          // Name of the component
          MuiButtonBase: {
            defaultProps: {
              // The props to change the default for.
              disableRipple: true // No more ripple!
            }
          },


          mode,
          ...(mode === "light"
            ? {
                MuiCard: {
                  styleOverrides: {
                    // Name of the slot
                    root: {
                      // Some CSS
                      background: "#f9f9f9",
                      borderRadius: "1.2rem"
                    }
                  }
                }
              }
            : {
                MuiCard: {
                  styleOverrides: {
                    // Name of the slot
                    root: {
                      // Some CSS
                      background: grey[800],
                      borderRadius: "1.2rem"

                    }
                  }
                },
                MuiTooltip: {
                  styleOverrides: {
                    tooltip: {
                      backgroundColor: grey[50],
                      color: grey[800]
                    }
                  }
                }
              })
        },
        shape: {
          borderRadius: 0
        },
        palette: {
          mode,

          ...(mode === "light"
            ? {
                // palette values for light mode
                primary: deepPurple,
                divider: deepPurple[200],
                text: {
                  primary: grey[900],
                  secondary: grey[800]
                }
              }
            : {
                // palette values for dark mode
                // common: {
                //   black: "#f9f9f9",
                //   white: "#ffcc00"
                // },
                primary: {
                  main: deepPurple[300]
                },
                divider: deepPurple[700],
                background: {
                  default: "#1e1e1e",
                  paper: "#1e1e1e"
                },
                text: {
                  primary: "#fff",
                  secondary: grey[500]
                }
              })
        }
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export const useColorModeContext = () => React.useContext(ColorModeContext);
