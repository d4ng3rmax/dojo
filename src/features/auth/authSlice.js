import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

async function fakeAuthRequest(user, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user === 'test@test.com' && password === '1234') {
        resolve({ user });
      } else {
        reject('Usuário ou senha inválidos. Tente novamente.');
      }
    }, 500);
  });
}

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ user, password }, { rejectWithValue }) => {
    try {
      const userData = await fakeAuthRequest(user, password);
      return userData;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const storedUser = localStorage.getItem('user');
const initialUser = storedUser ? JSON.parse(storedUser) : null;

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: initialUser,
    error: null,
    loading: false
  },
  reducers: {
    logoutSuccess: (state) => {
      state.user = null;
      state.error = null;
      state.loading = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      // REJECTED
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { logoutSuccess } = authSlice.actions;
export default authSlice.reducer;
