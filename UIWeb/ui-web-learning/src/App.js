import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Term from './pages/Term/Term';

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
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/term-of-service' element={<Term />} />
      </Routes>
    </div>
  );
}

export default App;
