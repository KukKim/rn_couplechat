// import { onAuth } from "@/features/auth";
// import { setUserInfo } from "@/reducers/user";
import { useRouter } from "expo-router";
// import { getAuth } from "firebase/auth";
import { useState } from "react";
import { Text, View } from "react-native";
// import { useDispatch } from "react-redux";

export default function Index() {
  // const dispatch = useDispatch();
  const navigation = useRouter();
  const [login, setLogin] = useState(false);

  // useEffect(() => {
  //   navigation.replace("/login");
  // }, [login]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>index</Text>
    </View>
  );
}
