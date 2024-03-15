// Importando os itens necessários
import { Text, View } from "react-native";
import { styles } from "../styles/StyleSheet";

const Home = ({ children }) => {
  // Função do Botão de Imagem
  pressButton3 = () => {
    alert("Você apertou o botão da imagem!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Aperte os botões</Text>
      {children}
    </View>
  );
};

export default Home;
