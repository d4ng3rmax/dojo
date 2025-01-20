import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../features/auth/authSlice';
import './Login.scss';

function Login() {
  const [user, setUser] = useState('');
  const [senha, setSenha] = useState('');

  const { loading, error } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const resultAction = await dispatch(loginUser({ user, password: senha }));

    if (loginUser.fulfilled.match(resultAction)) {
      localStorage.setItem('user', JSON.stringify(resultAction.payload));
      navigate('/home');
    } else {
      console.error('Erro de login:', resultAction.payload);
    }
  };

  return (
    <div className="login-container">
      <h1>Meu Banco</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="userInput">Usuário</label>
          <input
            type="text"
            id="userInput"
            placeholder="Digite seu usuário"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="passwordInput">Senha</label>
          <input
            type="password"
            id="passwordInput"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>

        {error && <p className="erro">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? 'Carregando...' : 'Entrar'}
        </button>
      </form>
    </div>
  );
}

export default Login;
