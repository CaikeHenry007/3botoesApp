import { TouchableOpacity } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function Button2() {
  return (
    <TouchableOpacity
      onPress={pressButton2}
      title="Entrar!"
      color="black"
      style={styles.btn2}
    >
      Sign In
    </TouchableOpacity>
  );
}
