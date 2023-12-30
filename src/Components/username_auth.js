import { auth, database, ref, get } from '../firebase_auth';

export const getUsername = async (uid) => {
  const userRef = ref(database, `users/${uid}`);
  const snapshot = await get(userRef);

  if (snapshot.exists()) {
    return snapshot.val().username;
  } else {
    return null; // Handle the case where username is not found
  }
};
