// Importando os componentes
import Home from "./src/pages/Home";
import Button1 from "./src/componentes/Button1Component";
import Button3 from "./src/componentes/Button3Component";
import { styles } from "./src/styles/StyleSheet";

export default function App() {
  // Função do Botão de  Log In
  pressButton1 = () => {
    alert("Você apertou o botão do Log In!");
  };

  // Função do Botão de Sign In
  pressButton2 = () => {
    alert("Você apertou o botão do Sign In!");
  };
  return (
    <Home>
      <Button1 texto="Log In" onPress={pressButton1} style={styles.btn1} />
      <Button1 texto="Sign in" onPress={pressButton2} style={styles.btn2} />
      <Button3
        source={require("./src/assets/images/clicar.png")}
        style={styles.btn3}
      />
      <Button3
        source={require("./src/assets/images/play.png")}
        style={styles.btn4}
      />
    </Home>
  );
}
