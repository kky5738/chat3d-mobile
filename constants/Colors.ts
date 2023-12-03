/**
 * Color palette for the light and dark themes.
 * Learn more about Light and Dark modes: https://docs.expo.io/guides/color-schemes/
 */
const tintColorLight = '#2f95dc'; // Tint color for the light theme
const tintColorDark = '#fff';     // Tint color for the dark theme

export default {
  light: {
    text: '#000',                  // Text color for the light theme
    background: '#fff',            // Background color for the light theme
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',                  // Text color for the dark theme
    background: '#000',            // Background color for the dark theme
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};
