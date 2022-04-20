import { createSlice } from '@reduxjs/toolkit'
const slice = createSlice({
    name: 'user',
    initialState: {
        user: localStorage.getItem('user') ?
            JSON.parse(localStorage.getItem('user')) :
            null,
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload
            localStorage.setItem('user', JSON.stringify(action.payload))
        },
        logoutSuccess: (state, action) => {
            state.user = null
            localStorage.removeItem('user')
        }
    },
})
export const user = slice.reducer;

export const { loginSuccess, logoutSuccess } = slice.actions
export const login = ( username, password ) => async dispatch => {
    try {
        // const res = await api.post('/whatever', { username, password })
        dispatch(loginSuccess({username}))
    } catch (e) {
        return console.error(e.message)
    }
}
export const logout = () => async dispatch => {
    try {
        // const res = await api.post('/whatever/logout/')
        return dispatch(logoutSuccess())
    } catch (e) {
        return console.error(e.message)
    }
}
