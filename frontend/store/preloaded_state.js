let preloadedState =  {
  errors: {
    sessionErrors: [],
    boardsErrors: [],
    usersErrors: []
  },
  ui: {
    bio: {
      editing: false
    }
  }
};

if (window.currentUser) {
    preloadedState.session = {currentUser: window.currentUser};
    delete window.currentUser;
}

export default preloadedState;
