import React from "react";
import { StyleSheet, Text, TextProps, View } from "react-native";

const CommonTextInput = ({ children, ...props }: TextProps) => {
  return (
    <View>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "red",
  },
});

export default CommonTextInput;
