import React from 'react';
import {Text, TextProps, StyleSheet} from 'react-native';

interface StyledTextProps extends TextProps {
  variant: 'bold' | 'semibold' | 'regular' | 'light' | 'extralight';
}

const StyledText: React.FC<StyledTextProps> = ({children, variant, style}) => {
  return <Text style={[styles[variant], style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 24 * 1.46,
  },
  semibold: {
    fontWeight: '600',
    fontSize: 20,
    // lineHeight: 'auto',
  },
  regular: {
    fontWeight: 'normal',
    fontSize: 17,
    lineHeight: 17 * 1.46,
  },
  light: {
    fontWeight: '300',
    fontSize: 16,
    lineHeight: 16 * 1.16,
  },
  extralight: {
    fontWeight: '200',
    fontSize: 12,
    lineHeight: 12 * 1.17,
  },
});

export default StyledText;
