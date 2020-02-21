const IOK_USER = 'iok-user';
const IOK_AUTH_TOKEN = 'iok-auth-token';
const IOK_REFRESH_TOKEN = 'iok-refresh-token';
export const getUser = () => {
  return localStorage.getItem(IOK_USER);
};
export const getToken = () => {
  return localStorage.getItem(IOK_AUTH_TOKEN);
};
export const getRefreshToken = () => {
  return localStorage.getItem(IOK_REFRESH_TOKEN);
};
export const setUser = user => {
  localStorage.setItem(IOK_USER, user);
};
export const setToken = token => {
  localStorage.setItem(IOK_AUTH_TOKEN, token);
};
export const signOut = () => {
  localStorage.removeItem(IOK_USER);
  localStorage.removeItem(IOK_AUTH_TOKEN);
  localStorage.removeItem(IOK_REFRESH_TOKEN);
};
export const saveUserData = (user, token, refreshToken) => {
  localStorage.setItem(IOK_USER, user);
  localStorage.setItem(IOK_AUTH_TOKEN, token);
  localStorage.setItem(IOK_REFRESH_TOKEN, refreshToken);
};
