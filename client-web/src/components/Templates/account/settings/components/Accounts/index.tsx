
import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Switch from "@mui/material/Switch";
import Tooltip from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";


import CustomBox from "components/Atomics/CustomBox";
import CustomTypography from "components/Atomics/CustomTypography";
import CustomAvatar from "components/Atomics/CustomAvatar";
import CustomInput from "components/Atomics/CustomInput";
import CustomButton from "components/Atomics/CustomButton";

// Images
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoAsana from "assets/images/small-logos/logo-asana.svg";


import { useMaterialUIController } from "context";

function Accounts(): JSX.Element {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  const [slack2FA, setSlack2FA] = useState<boolean>(true);
  const [spotify2FA, setSpotify2FA] = useState<boolean>(true);
  const [atlassian2FA, setAtlassian2FA] = useState<boolean>(true);
  const [asana2FA, setAsana2FA] = useState<boolean>(false);

  const handleSetSlack2FA = () => setSlack2FA(!slack2FA);
  const handleSetSpotify2FA = () => setSpotify2FA(!spotify2FA);
  const handleSetAtlassian2FA = () => setAtlassian2FA(!atlassian2FA);
  const handleSetAsana2FA = () => setAsana2FA(!asana2FA);

  return (
    <Card id="accounts">
      <CustomBox p={3} lineHeight={1}>
        <CustomBox mb={1}>
          <CustomTypography variant="h5">Accounts</CustomTypography>
        </CustomBox>
        <CustomTypography variant="button" color="text">
          Here you can setup and manage your integration settings.
        </CustomTypography>
      </CustomBox>
      <CustomBox pt={2} pb={3} px={3}>
        <CustomBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <CustomBox display="flex" alignItems="center">
            <CustomAvatar src={logoSlack} alt="Slack logo" variant="rounded" />
            <CustomBox ml={2}>
              <CustomTypography variant="h5" fontWeight="medium">
                Slack
              </CustomTypography>
              <CustomBox display="flex" alignItems="flex-end">
                <CustomTypography variant="button" color="text">
                  Show less
                </CustomTypography>
                <CustomTypography variant="button" color="text" sx={{ lineHeight: 0 }}>
                  <Icon fontSize="small">expand_less</Icon>
                </CustomTypography>
              </CustomBox>
            </CustomBox>
          </CustomBox>
          <CustomBox
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            width={{ xs: "100%", sm: "auto" }}
            mt={{ xs: 1, sm: 0 }}
          >
            <CustomBox lineHeight={0} mx={2}>
              <CustomTypography variant="button" color="text">
                {slack2FA ? "Enabled" : "Disabled"}
              </CustomTypography>
            </CustomBox>
            <CustomBox mr={1}>
              <Switch checked={slack2FA} onChange={handleSetSlack2FA} />
            </CustomBox>
          </CustomBox>
        </CustomBox>
        <CustomBox ml={2} pl={6} pt={2} lineHeight={1}>
          <CustomTypography variant="button" color="text">
            You haven&apos;t added your Slack yet or you aren&apos;t authorized. Please add our
            Slack Bot to your account by clicking on here. When you&apos;ve added the bot, send your
            verification code that you have received.
          </CustomTypography>
          <CustomBox
            bgColor={darkMode ? "grey-900" : "grey-100"}
            borderRadius="lg"
            display="flex"
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "center" }}
            flexDirection={{ xs: "column", sm: "row" }}
            my={3}
            py={1}
            pl={{ xs: 1, sm: 2 }}
            pr={1}
          >
            <CustomTypography variant="button" fontWeight="medium" color="text">
              Verification Code
            </CustomTypography>
            <CustomBox width={{ xs: "100%", sm: "25%", md: "15%" }} mt={{ xs: 1, sm: 0 }}>
              <Tooltip title="Copy" placement="top">
                <CustomInput size="small" value="1172913" />
              </Tooltip>
            </CustomBox>
          </CustomBox>
          <CustomBox
            bgColor={darkMode ? "grey-900" : "grey-100"}
            borderRadius="lg"
            display="flex"
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "center" }}
            flexDirection={{ xs: "column", sm: "row" }}
            my={3}
            py={1}
            pl={{ xs: 1, sm: 2 }}
            pr={1}
          >
            <CustomTypography variant="button" fontWeight="medium" color="text">
              Connected account
            </CustomTypography>
            <CustomBox
              display="flex"
              alignItems={{ xs: "flex-start", sm: "center" }}
              flexDirection={{ xs: "column", sm: "row" }}
            >
              <CustomBox mr={2} mb={{ xs: 1, sm: 0 }} lineHeight={0}>
                <CustomTypography variant="button" fontWeight="medium">
                  hello@spaceai.jp
                </CustomTypography>
              </CustomBox>
              <CustomButton variant="gradient" color="dark" size="small">
                delete
              </CustomButton>
            </CustomBox>
          </CustomBox>
        </CustomBox>
        <Divider />
        <CustomBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <CustomBox display="flex" alignItems="center">
            <CustomAvatar src={logoSpotify} alt="Slack logo" variant="rounded" />
            <CustomBox ml={2} lineHeight={0}>
              <CustomTypography variant="h5" fontWeight="medium">
                Spotify
              </CustomTypography>
              <CustomTypography variant="button" color="text">
                Music
              </CustomTypography>
            </CustomBox>
          </CustomBox>
          <CustomBox
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            width={{ xs: "100%", sm: "auto" }}
            mt={{ xs: 1, sm: 0 }}
          >
            <CustomBox lineHeight={0} mx={2}>
              <CustomTypography variant="button" color="text">
                {spotify2FA ? "Enabled" : "Disabled"}
              </CustomTypography>
            </CustomBox>
            <CustomBox mr={1}>
              <Switch checked={spotify2FA} onChange={handleSetSpotify2FA} />
            </CustomBox>
          </CustomBox>
        </CustomBox>
        <Divider />
        <CustomBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <CustomBox display="flex" alignItems="center">
            <CustomAvatar src={logoAtlassian} alt="Slack logo" variant="rounded" />
            <CustomBox ml={2} lineHeight={0}>
              <CustomTypography variant="h5" fontWeight="medium">
                Atlassian
              </CustomTypography>
              <CustomTypography variant="button" color="text">
                Payment vendor
              </CustomTypography>
            </CustomBox>
          </CustomBox>
          <CustomBox
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            width={{ xs: "100%", sm: "auto" }}
            mt={{ xs: 1, sm: 0 }}
          >
            <CustomBox lineHeight={0} mx={2}>
              <CustomTypography variant="button" color="text">
                {atlassian2FA ? "Enabled" : "Disabled"}
              </CustomTypography>
            </CustomBox>
            <CustomBox mr={1}>
              <Switch checked={atlassian2FA} onChange={handleSetAtlassian2FA} />
            </CustomBox>
          </CustomBox>
        </CustomBox>
        <Divider />
        <CustomBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <CustomBox display="flex" alignItems="center">
            <CustomAvatar src={logoAsana} alt="Slack logo" variant="rounded" />
            <CustomBox ml={2} lineHeight={0}>
              <CustomTypography variant="h5" fontWeight="medium">
                Asana
              </CustomTypography>
              <CustomTypography variant="button" color="text">
                Organize your team
              </CustomTypography>
            </CustomBox>
          </CustomBox>
          <CustomBox
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            width={{ xs: "100%", sm: "auto" }}
            mt={{ xs: 1, sm: 0 }}
          >
            <CustomBox lineHeight={0} mx={2}>
              <CustomTypography variant="button" color="text">
                {asana2FA ? "Enabled" : "Disabled"}
              </CustomTypography>
            </CustomBox>
            <CustomBox mr={1}>
              <Switch checked={asana2FA} onChange={handleSetAsana2FA} />
            </CustomBox>
          </CustomBox>
        </CustomBox>
      </CustomBox>
    </Card>
  );
}

export default Accounts;
