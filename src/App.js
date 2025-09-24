import { Container } from '@mui/material';
import Header from './Components/Header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Container fixed>Привет!</Container>
    </div>
  );
}

export default App;
