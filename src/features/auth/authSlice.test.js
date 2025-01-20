import { describe, beforeEach, it, expect } from 'vitest';
import { loginUser } from './authSlice';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';

describe('authSlice tests', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        auth: authReducer
      }
    });
  });

  it('deve logar com credenciais corretas (fakeAuthRequest)', async () => {
    const result = await store.dispatch(
      loginUser({ user: 'test@test.com', password: '1234' })
    );

    expect(result.type).toBe('auth/loginUser/fulfilled');
    const state = store.getState().auth;
    expect(state.user).toEqual({ user: 'test@test.com' });
    expect(state.error).toBe(null);
  });

  it('deve rejeitar com credenciais inválidas', async () => {
    const result = await store.dispatch(
      loginUser({ user: 'errado', password: '999' })
    );

    expect(result.type).toBe('auth/loginUser/rejected');
    const state = store.getState().auth;

    // Agora, aqui deve ser null, pois o store foi criado do zero
    expect(state.user).toBe(null);
    expect(state.error).toBe('Usuário ou senha inválidos. Tente novamente.');
  });
});

