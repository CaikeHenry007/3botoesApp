import { Text, View } from "react-native";
import { styles } from "../styles/StyleSheet";

const Home = ({ children }) => {
  pressButton1 = () => {
    alert("Você apertou o botão do Log In!");
  };
  pressButton2 = () => {
    alert("Você apertou o botão do Sign In!");
  };
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
