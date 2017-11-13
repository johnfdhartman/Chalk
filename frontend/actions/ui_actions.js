export const OPEN_BIO_EDITOR = 'OPEN_BIO_EDITOR';
export const CLOSE_BIO_EDITOR = 'CLOSE_BIO_EDITOR';
export const OPEN_USER_PROFILE = 'OPEN_USER_PROFILE';

export const openBioEditor = () => ({
  type: OPEN_BIO_EDITOR
});

export const closeBioEditor = () => ({
  type: CLOSE_BIO_EDITOR
});

export const openUserProfile = (userId) => ({
  type: OPEN_USER_PROFILE,
  userId
});
