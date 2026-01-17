import {
  View,
  Text,
  ButtonProps,
  Pressable,
  StyleProp,
  PressableProps,
  StyleSheet
} from 'react-native';

type CustomButtonTypes = { id?: string; name?: string; styles?: Object };

/**
 * This is an intersection type that merges a custom button type with the native PressableProps
 */
type customButtonProps = CustomButtonTypes & PressableProps;

// This returns a string type as id is a subset of the type customButtonProps. This is known as type indexing.
type buttonID = customButtonProps['id'];

const Button = ({ id, name, testID, onPress, styles }: customButtonProps) => {
  const returnID = (): buttonID => {
    return '';
  };

  const buttonStyles = { ...styles, ...currentStyles.container };
  return (
    <Pressable
      onPress={onPress}
      testID={testID}
      id={id}
      style={buttonStyles as StyleProp<PressableProps>}
    >
      <Text>{name}</Text>
    </Pressable>
  );
};

const currentStyles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10
  }
});

export default Button;
