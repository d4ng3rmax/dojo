import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function ProtectedRoute({ children }) {
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
}
