export const saveToken = (Token) => {
  localStorage.setItem('Token', JSON.stringify(Token));
};

export const deleteToken = () => {
  localStorage.clear();
}
