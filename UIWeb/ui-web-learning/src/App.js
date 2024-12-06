import logo from './logo.svg';
import Home from './pages/Home/Home';

import './App.css';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            {/* Insert link new page at hear */}
            <Link to='/'></Link>
          </li>
        </ul>
      </nav>
      {/* Setting router */}
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
