import CommonButton from "@/components/button/commonButton";
import WarningText from "@/components/text/warningText";
import CommonTextInput from "@/components/textInput/commonTextInput";
import { SignupStatus, signupValidation } from "@/features/auth";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function LoginScreen() {
  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [checkPwd, setCheckPwd] = React.useState("");

  const [txtInputStatus, setTxtInputStatus] = React.useState(SignupStatus.NONE);

  const onSignUp = () => {
    const newStatus = signupValidation({
      email: id,
      pwd: pwd,
      checkPwd: checkPwd,
    });

    if (newStatus === SignupStatus.AVAILABLE) {
      // createUser(id, pwd)
      //   .then((result) => {
      //     console.log("result - ", result);
      //   })
      //   .catch((err) => {
      //     console.log("error - ", err);
      //   });
    } else {
      setTxtInputStatus(newStatus);
    }
  };

  const showWarningText = () => {
    if (txtInputStatus === SignupStatus.EMAIL_EMPTY) {
      return "Email Empty";
    } else if (txtInputStatus === SignupStatus.EMAIL_INVALID) {
      return "Email Invalid";
    } else if (txtInputStatus === SignupStatus.PWD_EMPTY) {
      return "Password Empty";
    } else if (txtInputStatus === SignupStatus.PWD_DIFFER) {
      return "Password Different";
    } else if (txtInputStatus === SignupStatus.PWD_INVALID) {
      return "Password Invalid";
    }
    return "";
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
        <CommonTextInput
          placeholder="Email"
          onChangeText={setId}
          value={id}
          highlight={
            txtInputStatus === SignupStatus.EMAIL_EMPTY ||
            txtInputStatus === SignupStatus.EMAIL_INVALID
          }
        />
        <CommonTextInput
          secureTextEntry={true}
          placeholder="Password"
          onChangeText={setPwd}
          value={pwd}
          highlight={
            txtInputStatus === SignupStatus.PWD_EMPTY ||
            txtInputStatus === SignupStatus.PWD_INVALID ||
            txtInputStatus === SignupStatus.PWD_DIFFER
          }
        />
        <CommonTextInput
          secureTextEntry={true}
          placeholder="Password"
          onChangeText={setCheckPwd}
          value={checkPwd}
          highlight={
            txtInputStatus === SignupStatus.PWD_EMPTY ||
            txtInputStatus === SignupStatus.PWD_INVALID ||
            txtInputStatus === SignupStatus.PWD_DIFFER
          }
        />
        <CommonButton onPress={onSignUp}>
          <Text>SignUp</Text>
        </CommonButton>
        <WarningText>{showWarningText()}</WarningText>
      </View>
      {/* <View>
        <TouchableOpacity style={styles.socialLoginBtn}>
          <Text>Google Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialLoginBtn}>
          <Text>Facebook Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialLoginBtn}>
          <Text>Apple Login</Text>
        </TouchableOpacity>
      </View> */}
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
