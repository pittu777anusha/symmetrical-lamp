import React,{useContext} from 'react';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {auth} from "../../firebaseConfig";
import { userContext } from '../../context/userContext';
import { useNavigate } from 'react-router-dom';
import sideImage from "./images/sideImage.png";
import Authentication from "./images/authentication.png";
import loginwithgoogle from "./images/google-signin-button.png"
import GoogleIcon from '@mui/icons-material/Google';
import './landingPage.css';

function LandingPage() {
  const navigate=useNavigate();
  const [state,dispatch]=useContext(userContext);
    const redirectUser=({displayName,email,photoUrl})=>{
      console.log(displayName)
        dispatch({
          type:"LOGIN",
          payload:{
            displayName,
            email,
            photoUrl
          }

        })

    
    if(state.isAuth){
      navigate('/dashboard');
    }
    else{
      navigate('/');
    }
  }
    const signIn=()=>{
        
        const provider=new GoogleAuthProvider();
        
        signInWithPopup(auth, provider)
          .then((result) => {
            console.log(result);
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            console.log(token)
        
            // The signed-in user info.
            const user = result.user;
            const {displayName,email,photoUrl}=user;
            redirectUser({displayName,email,photoUrl})
            // const {displayName,email,photoURL
            // }=user;
            
            // redirectUser({displayName,email,photoURL})
            
            console.log(user)
            // redirectUser();
            // IdP data available using getAdditionalUserInfo(result)
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
    }
  return (
   
   <div className='wrapper-container'>
    <div className='side-image-container'>
        <img src={sideImage}/>
    </div>
    <div className='signin-container'>
      <h2>
        Welcome
      </h2>
      <img src={Authentication}/>
   
    <button onClick={signIn}>
Sign in with Google
      
        
      </button>
    </div>
    
    </div>
   
  )
}

export default LandingPage
