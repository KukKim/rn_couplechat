import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { CustomTextInputProps } from "./index";

const CommonTextInput = ({ children, ...props }: CustomTextInputProps) => {
  const [focused, setFocused] = React.useState(false);
  return (
    <View
      style={[
        { backgroundColor: props.highlight ? "yellow" : "white" },
        styles.txtInputContainer,
      ]}
    >
      <TextInput
        style={[{ borderColor: focused ? "red" : "balck" }, styles.txtInput]}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...props}
      >
        {children}
      </TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  txtInputContainer: {
    padding: 5,
    margin: 5,
  },
  txtInput: {
    paddingBottom: 5,
    borderBottomWidth: 1,
  },
});

export default CommonTextInput;
