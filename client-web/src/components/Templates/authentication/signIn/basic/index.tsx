
import { useCallback, useContext, useState } from "react";
import { useForm } from 'react-hook-form'

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";


import CustomBox from "components/Atomics/CustomBox";
import CustomTypography from "components/Atomics/CustomTypography";
import CustomInput from "components/Atomics/CustomInput";
import CustomButton from "components/Atomics/CustomButton";

// Authentication layout components
import BasicLayout from "components/Templates/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import { signInWithEmailAndPassword } from "infra/UserSession/SignIn";
import { SnackbarContext } from "utils/SnackbarContext";
import { LoadingContext } from "utils/LoadingContext";
import { EmailAndPassInputs, emailAndPassSchema } from "utils/ValidationScheme";

function Basic(): JSX.Element {
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  // snackbar and loading
  const { setSnackbarMessage, setType } = useContext(SnackbarContext)
  const loading = useContext(LoadingContext)

  // form validation
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<EmailAndPassInputs>({
    resolver: emailAndPassSchema
  })

  const signInUser = useCallback(async ({ email, password }: EmailAndPassInputs) => {
    console.log('signInUser', email, password)
    loading.setIsShow(true) // ローディング開始
    const res = await signInWithEmailAndPassword({
      email,
      password,
    })
    if (res) {
      console.log('success')
      loading.setIsShow(false) // ローディング終了
    } else {
      loading.setIsShow(false) // ローディング終了

      // アラート表示
      setSnackbarMessage('メールアドレスまたはパスワードが間違っています')
      setType('error')
    }
  }, [])

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
            Sign in
          </CustomTypography>
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
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
          </Grid>
        </CustomBox>
        <CustomBox pt={4} pb={3} px={3}>
          <CustomBox component="form" role="form" onSubmit={handleSubmit(signInUser)}>
            <CustomBox mb={2}>
              <CustomInput
                type="email"
                label="Email"
                inputName={'email'}
                fullWidth
                {...register('email', { required: true })}
                onChange={(e: { target: { value: any; }; }) => setValue('email', e.target.value)}
                error={errors.email?.message}
              />
            </CustomBox>
            <CustomBox mb={2}>
              <CustomInput
                type="password"
                label="Password"
                inputName={'password'}
                fullWidth
                {...register('password', { required: true })}
                onChange={(e: { target: { value: any; }; }) => setValue('password', e.target.value)}
                error={errors.password?.message}
              />
            </CustomBox>
            <CustomBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <CustomTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </CustomTypography>
            </CustomBox>
            <CustomBox mt={4} mb={1}>
              <CustomButton
                variant="gradient"
                color="info" fullWidth
                type="submit"
              >
                sign in
              </CustomButton>
            </CustomBox>
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
            <CustomBox mt={1} mb={1} textAlign="center">
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
            </CustomBox>
          </CustomBox>
        </CustomBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;

// function useForm<T>(arg0: { resolver: any; }): { register: any; handleSubmit: any; setValue: any; formState: { errors: any; }; } {
//   throw new Error("Function not implemented.");
// }

