
// @mui material components
import Card from "@mui/material/Card";


import CustomBox from "components/Atomics/CustomBox";
import CustomTypography from "components/Atomics/CustomTypography";

// Billing page components
import Bill from "components/Templates/account/billing/components/Bill";

function BillingInformation(): JSX.Element {
  return (
    <Card id="delete-account">
      <CustomBox pt={3} px={2}>
        <CustomTypography variant="h6" fontWeight="medium">
          Billing Information
        </CustomTypography>
      </CustomBox>
      <CustomBox pt={1} pb={2} px={2}>
        <CustomBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Bill
            name="oliver liam"
            company="viking burrito"
            email="oliver@burrito.com"
            vat="FRB1235476"
          />
          <Bill
            name="lucas harper"
            company="stone tech zone"
            email="lucas@stone-tech.com"
            vat="FRB1235476"
          />
          <Bill
            name="ethan james"
            company="fiber notion"
            email="ethan@fiber.com"
            vat="FRB1235476"
            noGutter
          />
        </CustomBox>
      </CustomBox>
    </Card>
  );
}

export default BillingInformation;
