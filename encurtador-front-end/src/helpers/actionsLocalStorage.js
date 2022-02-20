export const saveToken = (Token) => {
  localStorage.setItem('Token', JSON.stringify(Token));
};

export const saveUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const deleteToken = () => {
  localStorage.clear();
}
