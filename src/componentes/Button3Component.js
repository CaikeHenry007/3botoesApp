// Importando os itens necessários
import { Image, TouchableOpacity } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function Button3() {
  return (
    <TouchableOpacity onPress={pressButton3} style={styles.btn3}>
      <Image
        source={require("../assets/images/clicar.png")}
        style={styles.img}
      />
    </TouchableOpacity>
  );
}
