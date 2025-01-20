import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutSuccess } from '../features/auth/authSlice';
import './Home.scss';

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(logoutSuccess());
    navigate('/');
  };

  return (
    <div className="home-container">
      <h2>Bem-vindo(a) à tela inicial!</h2>
      {user && <p>Usuário logado: {user.email}</p>}
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
}

export default Home;
