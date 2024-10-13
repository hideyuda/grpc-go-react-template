
// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";


import CustomBox from "components/Atomics/CustomBox";
import CustomTypography from "components/Atomics/CustomTypography";
import CustomInput from "components/Atomics/CustomInput";
import CustomButton from "components/Atomics/CustomButton";

// Authentication layout components

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import { useCallback, useContext } from "react";
import { SnackbarContext } from "utils/SnackbarContext";
import { LoadingContext } from "utils/LoadingContext";
import { SignUpInputs, signUpSchema } from "utils/ValidationScheme";
import { useForm } from "react-hook-form";
import { UserServiceClient } from "pb/UserServiceClientPb";
import { User } from "pb/user_pb";
import BasicLayout from "components/Templates/authentication/components/BasicLayout";

function Cover(): JSX.Element {

  // snackbar and loading
  const { setSnackbarMessage, setType } = useContext(SnackbarContext)
  const loading = useContext(LoadingContext)

  // form validation
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SignUpInputs>({
    resolver: signUpSchema,
  })

  const signUp = useCallback(async ({ username, email, password }: SignUpInputs) => {
    console.log('signUp', username, email, password, process.env.REACT_APP_ENVOY_URL)
    loading.setIsShow(true) // ローディング開始
    const client = new UserServiceClient(process.env.REACT_APP_ENVOY_URL)
    const req = new User
    req.setName(username)
    req.setEmail(email)
    req.setPassword(password)
    console.log('req', req)
    const res = await client.create(req, {}).then(res => {
      if (res) {
        console.log('res', res)
        loading.setIsShow(false) // ローディング終了
        setSnackbarMessage('sign up success')
        setType('success')

        // move to sign in page
        const navigate = useNavigate()
        navigate('/')

      }
    }).catch(err => {
      if (err.code === 2) {
        alert('email already exists')
      }
      console.log('err', err)
      loading.setIsShow(false) // ローディング終了
      setSnackbarMessage('email already exists')
      setType('error')
    })
    // console.log('res', res)
    // if (res) {
    //   console.log('res', res)
    //   loading.setIsShow(false) // ローディング終了
    //     setSnackbarMessage('sign up success')
    //   setType('success')

    //   // move to sign in page
    //   const navigate = useNavigate()
    //   navigate('/')

    // } else {

    //     alert('email already exists')

    //   loading.setIsShow(false) // ローディング終了
    //   setSnackbarMessage('error')
    //   setType('error')
    // }
    // const navigate = useNavigate()
    // navigate('/')
  }, [])

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
          <CustomBox component="form" role="form" onSubmit={handleSubmit(signUp)}>
            <CustomBox mb={2}>
              <CustomInput
                type="text"
                label="Name"
                variant="standard"
                fullWidth
                {...register('username', { required: true })}
                onChange={(e: { target: { value: any; }; }) => setValue('username', e.target.value)}
                error={errors.username?.message}
              />
            </CustomBox>
            <CustomBox mb={2}>
              <CustomInput
                type="email"
                label="Email"
                variant="standard"
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
                variant="standard"
                fullWidth
                {...register('password', { required: true })}
                onChange={(e: { target: { value: any; }; }) => setValue('password', e.target.value)}
                error={errors.password?.message}
              />
            </CustomBox>
            <CustomBox display="flex" alignItems="center" ml={-1}>
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
            </CustomBox>
            <CustomBox mt={4} mb={1}>
              <CustomButton
                variant="gradient"
                color="info"
                fullWidth
                type="submit"
              >
                sign up
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
      </Card>
    </BasicLayout>
  );
}

export default Cover;
