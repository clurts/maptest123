import logo from './logo.svg';
import './App.css';
import Users from './components/Users';
import NewUser from './components/NewUser';
import LoginModal from './components/LoginModal';
import Mapcomponent from './components/Mapcomponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Mapcomponent />
      <NewUser />
      <Users />
      <LoginModal />
    </div>
  );
}

export default App;
