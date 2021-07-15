import logo from './logo.svg';
import './App.css';
import { useAuthStore } from './Contexts/AuthContext';
import NavBar from './Components/NavBar';

function App() {
  const { state, dispatch } = useAuthStore();
  const simulateLogin = () => {
    dispatch({ type: 'SET_USERNAME', message: { username: 'Sean' } })
    dispatch({ type: 'SET_ISAUTHENTICATED', message: { isAuthenticated: true } })
  }

  const simulateLogout = () => {
    dispatch({ type: 'SET_USERNAME', message: { username: 'Unknown' } })
    dispatch({ type: 'SET_ISAUTHENTICATED', message: { isAuthenticated: false } })
  }

  return (
    <div className="App">
      <NavBar />
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
          Your Username is {state.username}: <br />  Authenticated: {state.isAuthenticated ? 'YES' : 'NO'}
        </a>

        {!state.isAuthenticated && <button onClick={simulateLogin}>Log in</button>}
        {state.isAuthenticated && <button onClick={simulateLogout}>Log out</button>}
      </header>
    </div>
  );
}

export default App;
