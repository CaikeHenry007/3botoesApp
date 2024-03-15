import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191970",
    alignItems: "center",
    justifyContent: "center",
  },

  titulo: {
    fontSize: 25,
    color: "white",
    fontStyle: "italic",
    fontWeight: "bold",
  },

  // Botão de Log In
  btn1: {
    backgroundColor: "#00FFFF",
    width: "15%",
    height: "5%",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#008080",
    borderWidth: 2,
    borderRadius: 10,
    fontSize: 25,
    fontWeight: "bold",
    color: "#008080",
  },

  // Botão de Sign In
  btn2: {
    backgroundColor: "#FF1493",
    width: "15%",
    height: "5%",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#8B008B",
    borderWidth: 2,
    borderRadius: 10,
    fontSize: 25,
    fontStyle: "italic",
    color: "#8B008B",
  },

  // Botão de imagem 1
  btn3: {
    backgroundColor: "#00FF00",
    width: "17%",
    height: "12%",
    borderColor: "#008000",
    borderWidth: 2,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    color: "#008000",
  },

  // Botão de imagem 2
  btn4: {
    backgroundColor: "#FFFF00",
    width: "17%",
    height: "12%",
    borderColor: "#FF8C00",
    borderWidth: 2,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    color: "#FF8C00",
  },

  img: {
    width: "25%",
    height: "80%",
  },
});
