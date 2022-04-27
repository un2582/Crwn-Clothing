import { 
  signInWithGooglePopup, 
  createUserDocumentFromAuth, 
} from "../../utils/firebase/firebase.utils";

import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const Authentication = () => {
  const logGoogleUser = async () =>{
    const response = await signInWithGooglePopup();
    const userDocRef =  await createUserDocumentFromAuth(response.user);
  }
  return(
    <div>
      <h1>Sign In Page</h1>
      <SignInForm/>
      <SignUpForm/>
    </div>
  );
};

export default Authentication;