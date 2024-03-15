// Importando os itens necessários
import { TouchableOpacity } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function Button1() {
  return (
    <TouchableOpacity onPress={pressButton1} style={styles.btn1}>
      Login In
    </TouchableOpacity>
  );
}
