
// @mui material components
import Card from "@mui/material/Card";


import CustomBox from "components/Atomics/CustomBox";
import CustomTypography from "components/Atomics/CustomTypography";
import CustomButton from "components/Atomics/CustomButton";

function DeleteAccount(): JSX.Element {
  return (
    <Card id="delete-account">
      <CustomBox
        pr={3}
        display="flex"
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        flexDirection={{ xs: "column", sm: "row" }}
      >
        <CustomBox p={3} lineHeight={1}>
          <CustomBox mb={1}>
            <CustomTypography variant="h5">Delete Account</CustomTypography>
          </CustomBox>
          <CustomTypography variant="button" color="text">
            Once you delete your account, there is no going back. Please be certain.
          </CustomTypography>
        </CustomBox>
        <CustomBox display="flex" flexDirection={{ xs: "column", sm: "row" }}>
          <CustomButton variant="outlined" color="secondary">
            deactivate
          </CustomButton>
          <CustomBox ml={{ xs: 0, sm: 1 }} mt={{ xs: 1, sm: 0 }}>
            <CustomButton variant="gradient" color="error" sx={{ height: "100%" }}>
              delete account
            </CustomButton>
          </CustomBox>
        </CustomBox>
      </CustomBox>
    </Card>
  );
}

export default DeleteAccount;
