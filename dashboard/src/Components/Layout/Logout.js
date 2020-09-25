const Logout = () => {
  localStorage.removeItem('firebaseui::rememberedAccounts');
  localStorage.removeItem('token');
  // firebase.auth().signOut();
  window.location.replace('/login');
};

export default Logout;
