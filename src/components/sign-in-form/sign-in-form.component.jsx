import { useState } from 'react';

import FormInput from '../form-input/form-input.component';

import Button from '../button/button.component';

import { 
  signInAuthUserWithEmailAndPassword, 
  createUserDocumentFromAuth, 
  signInWithGooglePopup 
} from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignInForm = () => {
  const  [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const signInWithGoogle = async() => {
    const {user} = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  }

  const handleSubmit = async(event) => {
    event.preventDefault();

    try{
      const response = await signInAuthUserWithEmailAndPassword(email, password);
      console.log(response);
      
      resetFormFields();

    }catch(error){
      if(error.code === 'auth/email-already-in-use'){
        alert('Cannot create user, email already in use');
      }else{
        console.log('user creation encountered an error', error);
      }
    }
  }

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormFields({...formFields, [name]: value});
  };
  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <Button type="submit">Sign In</Button>
        <Button type="button" buttonType="google" onClick={signInWithGoogle}>Google Sign In</Button>
      </form>
    </div>
  );
}

export default SignInForm;