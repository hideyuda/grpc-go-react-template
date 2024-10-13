
// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Divider from "@mui/material/Divider";


import CustomBox from "components/Atomics/CustomBox";
import CustomTypography from "components/Atomics/CustomTypography";
import CustomBadge from "components/Atomics/CustomBadge";

function Sessions(): JSX.Element {
  const actionButtonStyles = {
    "& .material-icons-round": {
      transform: `translateX(0)`,
      transition: "all 200ms cubic-bezier(0.34,1.61,0.7,1.3)",
    },

    "&:hover .material-icons-round, &:focus .material-icons-round": {
      transform: `translateX(4px)`,
    },
  };

  return (
    <Card id="sessions">
      <CustomBox p={3} lineHeight={1}>
        <CustomBox mb={1}>
          <CustomTypography variant="h5">Sessions</CustomTypography>
        </CustomBox>
        <CustomTypography variant="button" color="text" fontWeight="regular">
          This is a list of devices that have logged into your account. Remove those that you do not
          recognize.
        </CustomTypography>
      </CustomBox>
      <CustomBox pb={3} px={3} sx={{ overflow: "auto" }}>
        <CustomBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width={{ xs: "max-content", sm: "100%" }}
        >
          <CustomBox display="flex" alignItems="center">
            <CustomBox textAlign="center" color="text" px={{ xs: 0, md: 1.5 }} opacity={0.6}>
              <Icon>desktop_windows</Icon>
            </CustomBox>
            <CustomBox height="100%" ml={2} lineHeight={1} mr={2}>
              <CustomTypography display="block" variant="button" fontWeight="regular" color="text">
                Bucharest 68.133.163.201
              </CustomTypography>
              <CustomTypography variant="caption" color="text">
                Your current session
              </CustomTypography>
            </CustomBox>
          </CustomBox>
          <CustomBox display="flex" alignItems="center">
            <CustomBadge
              variant="contained"
              size="xs"
              badgeContent="active"
              color="success"
              container
            />
            <CustomBox mx={2} lineHeight={1}>
              <CustomTypography variant="button" color="secondary" fontWeight="regular">
                EU
              </CustomTypography>
            </CustomBox>
            <CustomTypography
              component="a"
              href="#"
              variant="button"
              color="info"
              fontWeight="regular"
              sx={actionButtonStyles}
            >
              See more&nbsp;
              <Icon sx={{ fontWeight: "bold", verticalAlign: "middle" }}>arrow_forward</Icon>
            </CustomTypography>
          </CustomBox>
        </CustomBox>
        <Divider />
        <CustomBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width={{ xs: "max-content", sm: "100%" }}
        >
          <CustomBox display="flex" alignItems="center" mr={2}>
            <CustomBox textAlign="center" color="text" px={{ xs: 0, md: 1.5 }} opacity={0.6}>
              <Icon>desktop_windows</Icon>
            </CustomBox>
            <CustomBox ml={2}>
              <CustomTypography display="block" variant="body2" fontWeight="regular" color="text">
                Chrome on macOS
              </CustomTypography>
            </CustomBox>
          </CustomBox>
          <CustomBox display="flex" alignItems="center">
            <CustomBox mx={2} lineHeight={1}>
              <CustomTypography variant="button" color="secondary" fontWeight="regular">
                US
              </CustomTypography>
            </CustomBox>
            <CustomTypography
              component="a"
              href="#"
              variant="button"
              color="info"
              fontWeight="regular"
              sx={actionButtonStyles}
            >
              See more&nbsp;
              <Icon sx={{ fontWeight: "bold", verticalAlign: "middle" }}>arrow_forward</Icon>
            </CustomTypography>
          </CustomBox>
        </CustomBox>
        <Divider />
        <CustomBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width={{ xs: "max-content", sm: "100%" }}
        >
          <CustomBox display="flex" alignItems="center" mr={2}>
            <CustomBox textAlign="center" color="text" px={{ xs: 0, md: 1.5 }} opacity={0.6}>
              <Icon>phone_iphone</Icon>
            </CustomBox>
            <CustomBox ml={2}>
              <CustomTypography display="block" variant="body2" fontWeight="regular" color="text">
                Safari on iPhone
              </CustomTypography>
            </CustomBox>
          </CustomBox>
          <CustomBox display="flex" alignItems="center">
            <CustomBox mx={2} lineHeight={1}>
              <CustomTypography variant="button" color="secondary" fontWeight="regular">
                US
              </CustomTypography>
            </CustomBox>
            <CustomTypography
              component="a"
              href="#"
              variant="button"
              color="info"
              fontWeight="regular"
              sx={actionButtonStyles}
            >
              See more&nbsp;
              <Icon sx={{ fontWeight: "bold", verticalAlign: "middle" }}>arrow_forward</Icon>
            </CustomTypography>
          </CustomBox>
        </CustomBox>
      </CustomBox>
    </Card>
  );
}

export default Sessions;
