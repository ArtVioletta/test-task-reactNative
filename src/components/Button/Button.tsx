import React, {FC} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

interface Button {
  variant: 'primary' | 'dangarous';
  disabled?: boolean;
}

const colors = {
  primary: '#456EFE',
  dangarous: 'red',
  disabled: '#C6D3FF',
};

// type buttonColor = 'primary' | 'secondary' | 'disabled';

// interface Button{
//   color: buttonColor
//   disabled?: boolean
//   onPress: () => void
// }

const Button: FC<Button> = ({variant, disabled}) => {
  const foo = () => {
    if (disabled) {
      return colors.disabled;
    }
    if (variant === 'dangarous') {
      return colors.dangarous;
    }
    return colors.primary;
  };
  return (
    <Pressable
      disabled={disabled}
      style={[styles.buttonContainer, {backgroundColor: foo()}]}>
      <Text style={styles.buttonText}>Open</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 20,
    marginTop: 50,
    width: 360,
    height: 63,
    borderRadius: 10,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#456EFE',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default Button;
