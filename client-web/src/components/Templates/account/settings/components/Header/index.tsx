
import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";


import CustomBox from "components/Atomics/CustomBox";
import CustomTypography from "components/Atomics/CustomTypography";
import CustomAvatar from "components/Atomics/CustomAvatar";

function Header(): JSX.Element {
  const [visible, setVisible] = useState<boolean>(true);

  const handleSetVisible = () => setVisible(!visible);

  return (
    <Card id="profile">
      <CustomBox p={2}>
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            {/* <CustomAvatar src={burceMars} alt="profile-image" size="xl" shadow="sm" /> */}
          </Grid>
          <Grid item>
            <CustomBox height="100%" mt={0.5} lineHeight={1}>
              <CustomTypography variant="h5" fontWeight="medium">
                Alex Thompson
              </CustomTypography>
              <CustomTypography variant="button" color="text" fontWeight="medium">
                CEO / Co-Founder
              </CustomTypography>
            </CustomBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3} sx={{ ml: "auto" }}>
            <CustomBox
              display="flex"
              justifyContent={{ md: "flex-end" }}
              alignItems="center"
              lineHeight={1}
            >
              <CustomTypography variant="caption" fontWeight="regular">
                Switch to {visible ? "invisible" : "visible"}
              </CustomTypography>
              <CustomBox ml={1}>
                <Switch checked={visible} onChange={handleSetVisible} />
              </CustomBox>
            </CustomBox>
          </Grid>
        </Grid>
      </CustomBox>
    </Card>
  );
}

export default Header;
