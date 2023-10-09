import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Test from './pages/test';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/test' element={<Test />} />
    </Routes>
  );
};

export default App;
