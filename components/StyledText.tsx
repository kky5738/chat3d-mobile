import { Text, TextProps } from './Themed';

/**
 * Custom Text component with a monospaced font.
 * @param props - Text component props, including theme-specific color props.
 */
export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'SpaceMono' }]} />;
}
