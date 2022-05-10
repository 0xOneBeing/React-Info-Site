import logo from './logo.svg';
import './App.css';

function HeaderImage() {
  return (
    <div>
      <img src={logo} width="200" />
    </div>
  )
}

function Title() {
  return (
    <div>
      <h1>
        Fun facts about React
      </h1>
    </div>
  )
}

function FactsList() {
  return (
    <div>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <HeaderImage />
      <Title />
      <FactsList />
    </div>
  );
}

export default App;
