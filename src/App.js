import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Redirect from './Redirect';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Redirect to="/" />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
