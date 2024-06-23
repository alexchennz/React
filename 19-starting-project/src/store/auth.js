import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
    isAuthenticated: false
}

const AuthSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state){state.isAuthenticated = true},
        logout(state){state.isAuthenticated = false}
    }
});

export default AuthSlice.reducer;

export const authActions = AuthSlice.actions;