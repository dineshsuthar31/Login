import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Comonent/Home';
import { Routes, Route } from "react-router-dom"
import Login from './Comonent/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />

      </Routes>
    </>
  );
}

export default App;
