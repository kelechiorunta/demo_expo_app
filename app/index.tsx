import { PropsWithChildren, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  StyleProp,
  PressableProps,
  TextStyle
} from 'react-native';

export const CustomText = ({ children }: PropsWithChildren) => <Text>{children}</Text>;

export default function HomeScreen() {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const clickNow = (num: any) => {
    return num;
  };
  return (
    <View style={styles.container}>
      <CustomText>Welcome!</CustomText>
      <Text>{count}</Text>
      <Pressable
        accessibilityRole="button"
        testID="button"
        onPress={handleIncrement}
        style={styles.button as StyleProp<PressableProps>}
      >
        <Text style={styles.buttonLabel as StyleProp<TextStyle>}>Press Me</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    padding: 5,
    borderRadius: 10,
    backgroundColor: 'grey'
  },
  buttonLabel: {
    padding: 5,
    borderRadius: 10,
    backgroundColor: 'grey'
  }
});
