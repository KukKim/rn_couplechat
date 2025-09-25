// import { onAuth } from "@/features/auth";
// import { setUserInfo } from "@/reducers/user";
import { getAuth } from "@/features/auth";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
// import { useDispatch } from "react-redux";

export default function Index() {
  // const dispatch = useDispatch();
  const navigation = useRouter();
  // const [login, setLogin] = useState(false);

  useEffect(() => {
    getAuth().then(() => {
      navigation.replace("/login");
    });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>index</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.replace("/login");
        }}
      >
        <Text>test</Text>
      </TouchableOpacity>
    </View>
  );
}
