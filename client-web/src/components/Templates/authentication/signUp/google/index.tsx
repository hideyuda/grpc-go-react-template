
// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";


import CustomBox from "components/Atomics/CustomBox";
import CustomTypography from "components/Atomics/CustomTypography";
import CustomButton from "components/Atomics/CustomButton";

// Authentication layout components

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import { useContext } from "react";
import { SnackbarContext } from "utils/SnackbarContext";
import { LoadingContext } from "utils/LoadingContext";
import BasicLayout from "components/Templates/authentication/components/BasicLayout";
import Firebase from 'infra/Firebase';
import { useEffect } from 'react';
import { signInWithRedirect } from "firebase/auth";
import { getRedirectResult, GoogleAuthProvider } from "firebase/auth";

import { UserServiceClient } from "pb/UserServiceClientPb";
import { User } from "pb/user_pb";

import GoogleIcon from "@mui/icons-material/Google";

function SignUpWithGoogle(): JSX.Element {
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
          // const token = credential.accessToken;
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
                // loading.setIsShow(false) // ローディング終了
                setType('success')
                setSnackbarMessage('sign in success')

                // go back to previous page
                navigate(-3)
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

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <CustomBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <CustomTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Join us today
          </CustomTypography>
          <CustomTypography display="block" variant="button" color="white" my={1}>
            Enter your email and password to register
          </CustomTypography>
        </CustomBox>
        <CustomBox pt={4} pb={3} px={3}>
          <CustomBox component="form" role="form">
            {/* <CustomBox display="flex" alignItems="center" ml={-1}>
              <Checkbox
                {...register('agreeTerms', { required: true })}
                onChange={(e: { target: { checked: any; }; }) => setValue('agreeTerms', e.target.checked)}
              />
              <CustomTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </CustomTypography>
              <CustomTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="info"
                textGradient
              >
                Terms and Conditions
                {errors.agreeTerms?.message}
              </CustomTypography>
            </CustomBox> */}
            <CustomBox mt={4} mb={1}>
              <CustomButton
                variant="gradient"
                color="info"
                fullWidth
                type="submit"
                onClick={clickLogin}
              >
                sign up with google&nbsp;&nbsp;<GoogleIcon color="inherit" />
              </CustomButton>
            </CustomBox>
            <CustomBox mt={3} mb={1} textAlign="center">
              <CustomTypography variant="button" color="text">
                Already have an account?{" "}
                <CustomTypography
                  component={Link}
                  to="/signin/"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
                </CustomTypography>
              </CustomTypography>
            </CustomBox>
          </CustomBox>
        </CustomBox>
      </Card >
    </BasicLayout >
  );
}

export default SignUpWithGoogle;
