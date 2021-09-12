import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/styles';
import { createTheme, useTheme } from '@material-ui/core';

CustomThemeProvider.propTypes = {
  children: PropTypes.element
};

function CustomThemeProvider({ children }) {
  const theme = useTheme();
  const { breakpoints } = theme;
  const customTheme = createTheme({
    ...theme,
    mixins: {
      resetButtonStyles: () => ({
        outline: 'none',
        border: 'none',
        backgroundColor: 'transparent',
        cursor: 'pointer'
      })
    },
    breakpoints: {
      keys: [
        ...breakpoints.keys,
        'mobile',
        'tablet',
        'minDesktop',
        'desktop',
        'largeScreens'
      ],
      values: {
        ...breakpoints.values,
        mobile: 320,
        tablet: 481,
        minDesktop: 993,
        desktop: 1024,
        largeScreens: 1200
      }
    },
    palette: {
      primary: {
        main: '#000000',
        contrastText: '#FFFFFF'
      },
      secondary: {
        main: '#FFFFFF',
        contrastText: '#000000'
      },
      text: {
        primary: '#FFFFFF',
        secondary: '#000000'
      }
    },
    typography: {
      fontFamily: `"Open Sans", "Josefin Sans", sans-serif`
    }
  });

  return <ThemeProvider theme={customTheme}>{children}</ThemeProvider>;
}

export default CustomThemeProvider;
