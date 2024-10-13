
import { useContext } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";


// @mui icons
import GoogleIcon from "@mui/icons-material/Google";


import CustomBox from "components/Atomics/CustomBox";
import CustomTypography from "components/Atomics/CustomTypography";
import CustomButton from "components/Atomics/CustomButton";

// Authentication layout components
import BasicLayout from "components/Templates/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import { SnackbarContext } from "utils/SnackbarContext";
import { LoadingContext } from "utils/LoadingContext";

import Firebase from 'infra/Firebase';
import { useEffect } from 'react';
// import { onAuthStateChanged } from "firebase/auth";
//import { getAuth, signInWithRedirect } from "firebase/auth";
import { signInWithRedirect } from "firebase/auth";
import { getRedirectResult, GoogleAuthProvider } from "firebase/auth";

// import { signOut } from 'firebase/auth'
import { UserServiceClient } from "pb/UserServiceClientPb";
import { SignInRequest, User } from "pb/user_pb";

const SignInWithGoogle = () => {
  // snackbar and loading
  const { setSnackbarMessage, setType } = useContext(SnackbarContext)
  const loading = useContext(LoadingContext)
  const navigate = useNavigate()

  // auth
  const provider = new GoogleAuthProvider();
  const instance = Firebase.instance
  const auth = instance.auth;

  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        loading.setIsShow(true) // ローディング開始

        if (result !== null) {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;

          if (user) {
            const client = new UserServiceClient(process.env.REACT_APP_ENVOY_URL);
            const req = new User();
            req.setName(user.displayName);
            req.setEmail(user.email);
            req.setPhoneNumber(user.phoneNumber);
            req.setPhotoUrl(user.photoURL);
            req.setFirebaseId(user.uid);

            client.signInWithGoogle(req, {}, (err, res) => {
              if (err) {
                console.error(err);
                return;
              } else if (res === null) {
                return;
              } else {
                loading.setIsShow(false) // ローディング終了
                setType('success')
                setSnackbarMessage('sign in success')

                // go back to previous page
                navigate('/')
              }

            });
          }
        }
      }).catch((error) => {
        console.error(error);
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        console.error(errorCode);
        console.error(errorMessage);
        // console.error(email);
        // The AuthCredential type that was used.
        //const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }, []);

  const clickLogin = () => {
    signInWithRedirect(auth, provider);
  }

  // const checkLogin = () => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       const uid = user.uid;
  //       const email = user.email;
  //       console.log(uid);
  //       console.log(email);
  //     } else {
  //       console.log("signed out");
  //     }
  //   });
  // }
  // checkLogin();

  // const clickLogout = async () => {
  //   signOut(auth).then(() => {
  //     console.log("ログアウトしました");
  //   })
  //     .catch((error) => {
  //       console.log(`ログアウト時にエラーが発生しました (${error})`);
  //     });
  // }

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <CustomBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <CustomTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign In
          </CustomTypography>
          {/* <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={2}>
              <CustomTypography component={MuiLink} href="#" variant="body1" color="white">
                <FacebookIcon color="inherit" />
              </CustomTypography>
            </Grid>
            <Grid item xs={2}>
              <CustomTypography component={MuiLink} href="#" variant="body1" color="white">
                <GitHubIcon color="inherit" />
              </CustomTypography>
            </Grid>
            <Grid item xs={2}>
              <CustomTypography component={MuiLink} href="#" variant="body1" color="white">
                <GoogleIcon color="inherit" />
              </CustomTypography>
            </Grid>
          </Grid> */}
        </CustomBox>
        <CustomBox pt={4} pb={3} px={3}>
          <CustomBox mt={4} mb={1}>
            <CustomButton
              variant="gradient"
              color="info" fullWidth
              type="submit"
              onClick={clickLogin}
            >
              continue with google&nbsp;&nbsp;<GoogleIcon color="inherit" />
            </CustomButton>
          </CustomBox>
          {/* <CustomBox mt={4} mb={1}>
            <CustomButton
              variant="gradient"
              color="info" fullWidth
              type="submit"
              onClick={clickLogin}
            >
              continue with google&nbsp;&nbsp;<GoogleIcon color="inherit" />
            </CustomButton>
          </CustomBox> */}
          <CustomBox mt={3} mb={1} textAlign="center">
            <CustomTypography variant="button" color="text">
              Don&apos;t have an account?{" "}
              <CustomTypography
                component={Link}
                to="/signup/"
                variant="button"
                color="info"
                fontWeight="medium"
                textGradient
              >
                Sign up
              </CustomTypography>
            </CustomTypography>
          </CustomBox>
          {/* <CustomBox mt={1} mb={1} textAlign="center">
            <CustomTypography variant="button" color="text">
              Reset password?{" "}
              <CustomTypography
                component={Link}
                to="/reset/"
                variant="button"
                color="info"
                fontWeight="medium"
                textGradient
              >
                Reset Password
              </CustomTypography>
            </CustomTypography>
            {/* </CustomBox> 
          </CustomBox> */}
        </CustomBox>
      </Card>
    </BasicLayout>
  );
}

export default SignInWithGoogle;

// function useForm<T>(arg0: { resolver: any; }): { register: any; handleSubmit: any; setValue: any; formState: { errors: any; }; } {
//   throw new Error("Function not implemented.");
// }

