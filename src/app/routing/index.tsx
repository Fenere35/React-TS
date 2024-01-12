import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Contact from '../../pages/Contact';
import About from '../../pages/About';
import Portfolio from '../../pages/Portfolio';

const MainRouter = () => {
  return (
    <Routes>
      <Route path="Contact" element={<Contact/>} />
      <Route path="Home" element={< Home/>} />
      <Route path='About' element={<About/>}></Route>
      <Route path='Portfolio' element={<Portfolio/>}></Route>
    </Routes>
  );
};

export default MainRouter;