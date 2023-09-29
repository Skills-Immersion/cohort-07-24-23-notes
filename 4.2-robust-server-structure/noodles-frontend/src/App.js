import logo from './logo.svg';
import './App.css';
import PastaTable from './PastaTable';

function App() {
  return (
    <div>
      <header>
        <h1>Olive Garden</h1>
      </header>
      <main>
        <h3>Our Menu</h3>
        <PastaTable />
      </main>
    </div>
  );
}

export default App;
