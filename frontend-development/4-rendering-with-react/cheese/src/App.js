import logo from './logo.svg';
import Header from './Header';
import './App.css';

function App() {
  let factAboutCheese = 'cheese is the best';
  let templateLiteral = `${factAboutCheese}`
  return (
    <div>
      {/* how to render another component: import it at the top of the file and then write it as if it's an HTML element inside the HTML part of the file */}
      {/* passing parameters to React components is called passing props - props are information that a parent component gives to a child component */}
      <Header factAboutCheese={factAboutCheese} />
      <main className="main">
        <h3>Our Cheeses</h3>
        <ul>
          <li>gruyere</li>
          <li>cheddar</li>
          <li>parmesan</li>
        </ul>
      </main>
    </div>
  );
}

export default App;
