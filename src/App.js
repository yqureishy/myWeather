import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <h1>My Weather</h1>
    <label htmlFor="username">Username </label>
      <input id="username" type="text"/>
    
    <label htmlFor="">  Password </label>
    <input id="password" type="password"/>
    </div>
  );
}

export default App;
