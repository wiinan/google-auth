import React from "react";
import { ReactDOM } from "react";
import { GoogleLogin } from "react-google-login";

const responseGoogle = response =>  console.log(response);


ReactDOM.render(
  <GoogleLogin
    clientId="944412260089-hmuqr27noljh5k1ibfcm32ipinatpijq.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={handleLogin}
    onFailure={handleFailure}
  />
);
