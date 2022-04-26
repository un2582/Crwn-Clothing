import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () =>{
    const response = await signInWithGooglePopup();
    const userDoc =  await createUserDocumentFromAuth(response.user);
  }
  return(
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>
        Sign In with Google Popup
      </button>
    </div>
  );
};

export default SignIn;