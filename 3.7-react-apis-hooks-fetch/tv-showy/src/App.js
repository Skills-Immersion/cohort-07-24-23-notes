import { useState } from 'react';
import './App.css';

function App() {
  const [clicks, setClicks] = useState(0)
  return (
    <div className="container">
      <h1 onClick={() => setClicks(clicks + 1)}>TV Showy {clicks}</h1>
      <h4>the finest app for finding information about TV shows</h4>
    </div>
  );
}

export default App;
