import { useCallback, useContext } from 'react';
import { ColorSchemeName, useColorScheme } from 'react-native';
import { ThemeContext } from '../theme/ThemeProvider';
import colors from '../constants/colors';

export default function useThemeContext() {
  const context = useContext(ThemeContext);
  const systemColorScheme = useColorScheme();

  if (context === undefined) {
    throw new Error('useThemeContext must be within ThemeProvider');
  }

  const { theme, loading, setTheme } = context;

  if (loading) {
    throw new Error('Tried to use ThemeContext before initialized');
  }

  // if theme is set, use that, otherwise, use system theme
  const colorTheme: NonNullable<ColorSchemeName> =
    theme ?? systemColorScheme ?? 'light';

  return {
    colors: colorTheme === 'dark' ? colors.dark : colors.light,
    colorTheme,
    isSystemTheme: !theme,
    isDark: theme === 'dark',
    systemTheme: systemColorScheme,
    setColorTheme: useCallback(
      (themeName: ColorSchemeName) => setTheme(themeName),
      [setTheme]
    ),
  };
}