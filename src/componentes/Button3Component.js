// Importando os itens necessários
import { Image, TouchableOpacity } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function Button3({ source, style }) {
  return (
    <TouchableOpacity onPress={pressButton3} style={style}>
      <Image source={source} style={styles.img} />
    </TouchableOpacity>
  );
}
