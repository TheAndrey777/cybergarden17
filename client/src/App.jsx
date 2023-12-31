import { Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Search from './pages/Search.jsx';
import Profile from './pages/Profile.jsx';
import Favorites from './pages/Favorites.jsx';
import SightBar from './pages/SightBar.jsx';
import Settings from './pages/Settings.jsx';
import Welcome from './pages/Welcome.jsx';
import Achievements from './pages/Achievements.jsx';
import SearchAttraction from './components/SearchAttraction.jsx';
import axios from 'axios';

function App() {
  return (
    <div
      className='w-100% min-h-screen 
      [&::-webkit-scrollbar]:w-1
    [&::-webkit-scrollbar-track]:bg-[#000000]
    [&::-webkit-scrollbar-thumb]:bg-gray-300
    dark:[&::-webkit-scrollbar-track]:bg-[#000000]
    dark:[&::-webkit-scrollbar-thumb]:bg-slate-500
    [&::-webkit-scrollbar-thumb]:rounded-full
    overflow-hidden'
    >
      <Routes>
        <Route path='/' element={<SearchAttraction />}></Route>
        <Route path='auth' element={<Auth />}></Route>
        <Route path='auth/login' element={<Login />}></Route>
        <Route path='auth/register' element={<Register />}></Route>
        <Route path='search' element={<Search />}></Route>
        <Route path='profile' element={<Profile />}></Route>
        <Route path='favourite' element={<Favorites />}></Route>
        <Route path='settings' element={<Settings />}></Route>
        <Route path='sightbar' element={<SightBar />}></Route>
        <Route path='welcome' element={<Welcome />}></Route>
        <Route path='achievements' element={<Achievements />}></Route>
      </Routes>
    </div>
  );
}

export default App;
