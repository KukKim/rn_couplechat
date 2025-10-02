import CommonButton from "@/components/button/commonButton";
// import { createUser, signInUser, userSignOut } from "@/features/auth";
import { useRouter } from "expo-router";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function LoginScreen() {
  const navigation = useRouter();
  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  const onSignIn = () => {
    // signInUser(id, pwd)
    //   .then((userCredential) => {
    //     const user = userCredential.user;
    //     console.log("Login user - ", user);
    //   })
    //   .catch((err) => {
    //     console.log("error - ", err);
    //   });
  };
  const onSignUp = () => {
    navigation.push("/signup");
  };
  const onSignOut = () => {
    // userSignOut()
    //   .then((result) => {
    //     console.log("result - ", result);
    //   })
    //   .catch((err) => {
    //     console.log("error - ", err);
    //   });
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        {/* <Image
          style={styles.logo}
          source={require("../../assets/images/testLogo.png")}
        /> */}
      </View>
      <View style={styles.loginContainer}>
        <View style={styles.txtInputContainer}>
          <TextInput
            style={styles.txtInput}
            placeholder="Email"
            onChangeText={setId}
            value={id}
          />
        </View>
        <View style={styles.txtInputContainer}>
          <TextInput
            placeholder="Password"
            style={styles.txtInput}
            onChangeText={setPwd}
            value={pwd}
          />
        </View>
        <CommonButton onPress={onSignIn}>
          <Text>Login</Text>
        </CommonButton>
        <CommonButton onPress={onSignUp}>
          <Text>SignUp</Text>
        </CommonButton>
        <CommonButton onPress={onSignOut}>
          <Text>SignOut</Text>
        </CommonButton>
      </View>
      <View>
        <TouchableOpacity style={styles.socialLoginBtn}>
          <Text>Google Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialLoginBtn}>
          <Text>Facebook Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialLoginBtn}>
          <Text>Apple Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "center",
    padding: 5,
  },
  logo: {
    width: 100,
    height: 100,
  },
  loginContainer: {},
  txtInputContainer: {
    padding: 5,
    margin: 5,
  },
  txtInput: {
    paddingBottom: 5,
    borderBottomWidth: 1,
  },
  socialLoginBtn: {
    margin: 5,
    padding: 5,
    backgroundColor: "green",
  },
});
