import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export const authenticateUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // You can now use the user object
    localStorage.setItem('userId', user.uid);
    return {
      success: true,
      uid: user.uid,
      email: user.email,
      token: await user.getIdToken(), // Fetch the user's ID token if needed
    };
  } catch (error) {
    console.error('Authentication error:', error.message);

    // Handle specific Firebase errors
    let errorMessage = 'תקלה בהתחברות, נסו שנית';
    if (error.code === 'auth/invalid-credential') {
      errorMessage = 'אחד או יותר מהפרטים שגואים';
    }

    return {
      success: false,
      message: errorMessage,
    };
  }
};
