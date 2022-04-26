import { 
  signInWithGooglePopup, 
  createUserDocumentFromAuth, 
} from "../../utils/firebase/firebase.utils";

import Button from "../../components/button/button.component";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  const logGoogleUser = async () =>{
    const response = await signInWithGooglePopup();
    const userDocRef =  await createUserDocumentFromAuth(response.user);
  }
  return(
    <div>
      <h1>Sign In</h1>
      <Button buttonType='google' onClick={logGoogleUser}>
        Sign In with Google Popup
      </Button>
      <SignUpForm/>
    </div>
  );
};

export default SignIn;