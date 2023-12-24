import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRout = () => {
  var auth = false;
  axios.get('http://10.131.56.212:8465/api/auth/me').then((res) => {
    auth = true;
  });
  return auth ? <Outlet /> : <Navigate to={'/login'} />;
};

export default ProtectedRout;
