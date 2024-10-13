
// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";


import CustomBox from "components/Atomics/CustomBox";
import CustomTypography from "components/Atomics/CustomTypography";
import CustomButton from "components/Atomics/CustomButton";
import CustomBadge from "components/Atomics/CustomBadge";

function Authentication(): JSX.Element {
  return (
    <Card id="2fa" sx={{ overflow: "visible" }}>
      <CustomBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <CustomTypography variant="h5">Two-factor authentication</CustomTypography>
        <CustomBadge variant="contained" color="success" badgeContent="enabled" container />
      </CustomBox>
      <CustomBox p={3}>
        <CustomBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <CustomTypography variant="body2" color="text">
            Security keys
          </CustomTypography>
          <CustomBox
            display="flex"
            alignItems={{ xs: "flex-start", sm: "center" }}
            flexDirection={{ xs: "column", sm: "row" }}
          >
            <CustomBox mx={{ xs: 0, sm: 2 }} mb={{ xs: 1, sm: 0 }}>
              <CustomTypography variant="button" color="text" fontWeight="regular">
                No Security keys
              </CustomTypography>
            </CustomBox>
            <CustomButton variant="outlined" color="dark" size="small">
              add
            </CustomButton>
          </CustomBox>
        </CustomBox>
        <Divider />
        <CustomBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <CustomTypography variant="body2" color="text">
            SMS number
          </CustomTypography>
          <CustomBox
            display="flex"
            alignItems={{ xs: "flex-start", sm: "center" }}
            flexDirection={{ xs: "column", sm: "row" }}
          >
            <CustomBox mx={{ xs: 0, sm: 2 }} mb={{ xs: 1, sm: 0 }}>
              <CustomTypography variant="button" color="text" fontWeight="regular">
                +3012374423
              </CustomTypography>
            </CustomBox>
            <CustomButton variant="outlined" color="dark" size="small">
              edit
            </CustomButton>
          </CustomBox>
        </CustomBox>
        <Divider />
        <CustomBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <CustomTypography variant="body2" color="text">
            Authenticator app
          </CustomTypography>
          <CustomBox
            display="flex"
            alignItems={{ xs: "flex-start", sm: "center" }}
            flexDirection={{ xs: "column", sm: "row" }}
          >
            <CustomBox mx={{ xs: 0, sm: 2 }} mb={{ xs: 1, sm: 0 }}>
              <CustomTypography variant="button" color="text" fontWeight="regular">
                Not Configured
              </CustomTypography>
            </CustomBox>
            <CustomButton variant="outlined" color="dark" size="small">
              set up
            </CustomButton>
          </CustomBox>
        </CustomBox>
      </CustomBox>
    </Card>
  );
}

export default Authentication;
