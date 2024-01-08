import React, { useMemo } from 'react';
import { createTheme, StyledEngineProvider, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';
import breakpoints from './breakpoints';
import componentsOverride from './overrides';
import shadows, { customShadows } from './shadows';
import useSettings from '../hooks/useSettings';
import { CssBaseline } from '@mui/material';

const ThemeProvider = ({ children }) => {
  const { themeMode, themeDirection } = useSettings();
  const isLight = themeMode === 'light';
  const themeOptions = useMemo(
    () => ({
      palette: isLight ? palette.light : palette.dark,
      typography,
      breakpoints,
      shape: { borderRadius: 8 },
      direction: themeDirection,
      shadows: isLight ? shadows.light : shadows.dark,
      customShadows: isLight ? customShadows.light : customShadows.dark,
    }),
    [isLight, themeDirection]
  );
  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeProvider;
