const IOK_USER_ID = 'iok-user-id';
const IOK_AUTH_TOKEN = 'iok-auth-token';
const IOK_REFRESH_TOKEN = 'iok-refresh-token';
export const getUserId = () => {
  return localStorage.getItem(IOK_USER_ID);
};
export const getToken = () => {
  return localStorage.getItem(IOK_AUTH_TOKEN);
};
export const getRefreshToken = () => {
  return localStorage.getItem(IOK_REFRESH_TOKEN);
};
export const setUserId = id => {
  localStorage.setItem(IOK_USER_ID, id);
};
export const setToken = token => {
  localStorage.setItem(IOK_AUTH_TOKEN, token);
};
export const signOut = () => {
  localStorage.removeItem(IOK_USER_ID);
  localStorage.removeItem(IOK_AUTH_TOKEN);
  localStorage.removeItem(IOK_REFRESH_TOKEN);
};
export const saveUserData = (id, token, refreshToken) => {
  localStorage.setItem(IOK_USER_ID, id);
  localStorage.setItem(IOK_AUTH_TOKEN, token);
  localStorage.setItem(IOK_REFRESH_TOKEN, refreshToken);
};
