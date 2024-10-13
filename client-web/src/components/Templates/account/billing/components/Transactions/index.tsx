
// @mui material components
import Card from "@mui/material/Card";
// import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";


import CustomBox from "components/Atomics/CustomBox";
import CustomTypography from "components/Atomics/CustomTypography";

// Billing page components
import Transaction from "components/Templates/account/billing/components/Transaction";

function Transactions(): JSX.Element {
  return (
    <Card sx={{ height: "100%" }}>
      <CustomBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={2}>
        <CustomTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          Your Transaction&apos;s
        </CustomTypography>
        <CustomBox display="flex" alignItems="flex-start">
          <CustomBox color="text" mr={0.5} lineHeight={0}>
            <Icon color="inherit" fontSize="small">
              date_range
            </Icon>
          </CustomBox>
          <CustomTypography variant="button" color="text" fontWeight="regular">
            23 - 30 March 2020
          </CustomTypography>
        </CustomBox>
      </CustomBox>
      <CustomBox pt={3} pb={2} px={2}>
        <CustomBox mb={2}>
          <CustomTypography variant="caption" color="text" fontWeight="bold" textTransform="uppercase">
            newest
          </CustomTypography>
        </CustomBox>
        <CustomBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          <Transaction
            color="error"
            icon="expand_more"
            name="Netflix"
            description="27 March 2020, at 12:30 PM"
            value="- $ 2,500"
          />
          <Transaction
            color="success"
            icon="expand_less"
            name="Apple"
            description="27 March 2020, at 04:30 AM"
            value="+ $ 2,000"
          />
        </CustomBox>
        <CustomBox mt={1} mb={2}>
          <CustomTypography variant="caption" color="text" fontWeight="bold" textTransform="uppercase">
            yesterday
          </CustomTypography>
        </CustomBox>
        <CustomBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          <Transaction
            color="success"
            icon="expand_less"
            name="Stripe"
            description="26 March 2020, at 13:45 PM"
            value="+ $ 750"
          />
          <Transaction
            color="success"
            icon="expand_less"
            name="HubSpot"
            description="26 March 2020, at 12:30 PM"
            value="+ $ 1,000"
          />
          <Transaction
            color="success"
            icon="expand_less"
            name="Creative Tim"
            description="26 March 2020, at 08:30 AM"
            value="+ $ 2,500"
          />
          <Transaction
            color="dark"
            icon="priority_high"
            name="Webflow"
            description="26 March 2020, at 05:00 AM"
            value="Pending"
          />
        </CustomBox>
      </CustomBox>
    </Card>
  );
}

export default Transactions;
