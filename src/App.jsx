import Pet from "./Pet";
import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Nemo" animal="Cat" breed="Mixed" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Dog" animal="Doink" breed="Mixed" />
    </div>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
