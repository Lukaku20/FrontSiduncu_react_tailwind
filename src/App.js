// App.js
import Layout from "./componentes/Layout";
import BorderScreen from "./componentes/BorderScreen";
import './App.css';

function App() {
  return (
    <Layout>
      <h1 className="text-azulMarino">Bienvenido a SIDUNCU</h1>
      <BorderScreen />
    </Layout>
  );
}

export default App;
