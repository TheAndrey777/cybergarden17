import { Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Search from './pages/Search.jsx';
import Profile from './pages/Profile.jsx';
import Favorites from './pages/Favorites.jsx';

function App() {
  return (
    <div className='w-100% min-h-screen'>
      <Routes>
        <Route path='/' element={<Auth />}></Route>
        <Route path='auth' element={<Auth />}></Route>
        <Route path='auth/login' element={<Login />}></Route>
        <Route path='auth/register' element={<Register />}></Route>
        <Route path='search' element={<Search />}></Route>
        <Route path='profile' element={<Profile />}></Route>
        <Route path='favourite' element={<Favorites />}></Route>
      </Routes>
    </div>
  );
}

export default App;
