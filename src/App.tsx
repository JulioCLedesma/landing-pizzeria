import { useState } from "react";
import viteLogo from "/vite.svg"; // Asegúrate que la ruta a tus logos sea correcta
import reactLogo from "./assets/react.svg";

// Este es el componente App por defecto de Vite.
// En la estructura actual, no se está utilizando directamente,
// ya que 'AppLayout.tsx' controla la disposición de la página.
export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="page text-center">
      <div>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((c) => c + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

// 