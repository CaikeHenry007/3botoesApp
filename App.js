// Importando os componentes
import Home from "./src/pages/Home";
import Button1 from "./src/componentes/Button1Component";
import Button2 from "./src/componentes/Button2Component";
import Button3 from "./src/componentes/Button3Component";

export default function App() {
  return (
    <Home>
      <Button1 />
      <Button2 />
      <Button3 />
    </Home>
  );
}
