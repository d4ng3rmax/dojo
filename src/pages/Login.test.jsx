import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../app/store';
import Login from './Login';

describe('Login Component', () => {
  it('renderiza campo de usuário e senha e botão de entrar', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByLabelText('Usuário')).toBeInTheDocument();
    expect(screen.getByLabelText('Senha')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Entrar' })).toBeInTheDocument();
  });

  it('exibe erro ao digitar credenciais erradas', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );

    const userInput = screen.getByLabelText('Usuário');
    const senhaInput = screen.getByLabelText('Senha');
    const button = screen.getByRole('button', { name: 'Entrar' });

    fireEvent.change(userInput, { target: { value: 'userErrado' } });
    fireEvent.change(senhaInput, { target: { value: 'senhaErrada' } });
    fireEvent.click(button);

    const errorMessage = await screen.findByText(/Usuário ou senha inválidos/i);
    expect(errorMessage).toBeInTheDocument();
  });
});
