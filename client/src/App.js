
import './App.css';
import { Header } from './components';
import { Outlet} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
