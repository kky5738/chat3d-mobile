/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { Text as DefaultText, useColorScheme, View as DefaultView } from 'react-native';

import Colors from '../constants/Colors';

// Define the common theme props that can be applied to Text and View components
type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

// Extract the props types from DefaultText and DefaultView components
export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];

/**
 * Custom hook to get the theme color based on the current color scheme.
 * @param props - light and dark color values.
 * @param colorName - color name to get from the theme.
 * @returns The theme color based on the current color scheme.
 */
export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

/**
 * Custom Text component that automatically applies the theme color.
 * @param props - Text component props along with theme-specific color props.
 */
export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

/**
 * Custom View component that automatically applies the theme background color.
 * @param props - View component props along with theme-specific color props.
 */
export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
