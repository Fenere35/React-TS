import MainRouter from './app/routing';
import Navbar from './components/Navbar';
import './styles/style.css';

const App = () => {
  return (
    <>
      <Navbar/>
      <MainRouter />
    </>
  );
}

export default App;

