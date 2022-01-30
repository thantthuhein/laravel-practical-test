export const isLoggedIn = window.localStorage.getItem('token') ? true : false;

export const saveUserData = (data) => {
     window.localStorage.setItem('token', data.token);
     window.localStorage.setItem('user', JSON.stringify(data.user));
}

export const logout = () => {
     window.localStorage.removeItem('token');
     window.localStorage.removeItem('user');
}