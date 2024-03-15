// Importando os itens necessários
import { TouchableOpacity } from "react-native";

export default function Button1({ texto, onPress, style }) {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      {texto}
    </TouchableOpacity>
  );
}
