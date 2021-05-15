import logo from './logo.svg';
import './App.css';
import { Routes } from './components/Routes';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContextProvider';

function App() {

  const { theme } = useContext(ThemeContext);

  return (
    <div className="App" style={{ backgroundColor: theme.bodyBackground }}>
      <Routes />
    </div>
  );
}

export default App;
