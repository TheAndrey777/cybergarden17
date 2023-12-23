import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRout = () => {
  const auth = false;

  return auth ? <Outlet /> : <Navigate to={'/login'} />;
};

export default ProtectedRout;
