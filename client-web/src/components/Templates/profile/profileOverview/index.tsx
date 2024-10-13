
// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";


import CustomBox from "components/Atomics/CustomBox";
import CustomTypography from "components/Atomics/CustomTypography";

// MUI examples components
import DashboardLayout from "components/Molecules/LayoutContainers/DashboardLayout";
import DashboardNavbar from "components/Molecules/Navbars/DashboardNavbar";
import Footer from "components/Molecules/Footer";
import ProfileInfoCard from "components/Molecules/Cards/InfoCards/ProfileInfoCard";
import DefaultProjectCard from "components/Molecules/Cards/ProjectCards/DefaultProjectCard";

// Overview page components
import backgroundImage from "assets/images/bg-profile.jpeg";

// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";
import { useEffect, useState } from "react";
import { UserServiceClient } from "pb/UserServiceClientPb";
import { User, UserUuidRequest } from "pb/user_pb";
import breakpoints from "assets/theme/base/breakpoints";
import Card from "@mui/material/Card";
import CustomAvatar from "components/Atomics/CustomAvatar";
import { ContentServiceClient } from "pb/ContentServiceClientPb";
import { Content, ContentUserIdRequest } from "pb/content_pb";

function Overview(): JSX.Element {
  // const signedUser = useRecoilValue(authrizedUserAtom)
  const [profileUser, setProfileUser] = useState<User.AsObject | null>(null)
  const [contentList, setContentList] = useState<Content.AsObject[] | null>(null)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const uuid = urlParams.get("uuid");
    if (uuid) {
      // get user by uuid
      const client = new UserServiceClient(process.env.REACT_APP_ENVOY_URL)
      const req = new UserUuidRequest()
      req.setUuid(uuid || "")
      client.getByUuid(req, {}, async (err, res) => {
        if (err) {
          console.log(err)
        } else {
          setProfileUser(res.toObject())

          // get content by user id
          const contentClient = new ContentServiceClient(process.env.REACT_APP_ENVOY_URL)
          const contentReq = new ContentUserIdRequest()
          contentReq.setUserId(res.toObject().id)
          contentClient.getListByUser(contentReq, {}, (err, res) => {
            if (err) {
            } else {
              setContentList(res.toObject().contentList)
            }
          })
        }
      })
    }
  }, [])
  // header
  const [tabsOrientation, setTabsOrientation] = useState<"horizontal" | "vertical">("horizontal");
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    // A function that sets the orientation state of the tabs.
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.sm
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    /** 
     The event listener that's calling the handleTabsOrientation function when resizing the window.
    */
    window.addEventListener("resize", handleTabsOrientation);

    // Call the handleTabsOrientation function to set the state with the initial value.
    handleTabsOrientation();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);

  // const handleSetTabValue = (event: any, newValue: any) => setTabValue(newValue);

  const handleEditProfile = () => {
    console.log("edit profile")
  }

  const handleSaveProfile = () => {
    console.log("save profile")
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <CustomBox mb={2} />
      {/* <Header> */}
      <CustomBox position="relative" mb={5}>
        <CustomBox
          display="flex"
          alignItems="center"
          position="relative"
          minHeight="18.75rem"
          borderRadius="xl"
          sx={{
            backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.info.main, 0.6),
                rgba(gradients.info.state, 0.6)
              )}, url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "50%",
            overflow: "hidden",
          }}
        />
        <Card
          sx={{
            position: "relative",
            mt: -8,
            mx: 3,
            py: 2,
            px: 2,
          }}
        >
          <Grid container spacing={3} alignItems="center">
            <Grid item>
              <CustomAvatar
                src={profileUser?.photoUrl}
                alt="profile-image"
                size="xl" shadow="sm"
              />
            </Grid>
            <Grid item>
              <CustomBox height="100%" mt={0.5} lineHeight={1}>
                <CustomTypography variant="h5" fontWeight="medium">
                  {profileUser?.name}
                </CustomTypography>
                {/* <CustomTypography variant="button" color="text" fontWeight="regular">
                CEO / Co-Founder
              </CustomTypography> */}
              </CustomBox>
            </Grid>
          </Grid>
          <CustomBox mt={5} mb={3}>
            <Grid container spacing={1}>
              {/* <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}> */}
              <Divider orientation="vertical" sx={{ ml: -2 }} />
              <ProfileInfoCard
                title="profile information"
                description={profileUser?.description}
                info={{
                  // fullName: "Alec M. Thompson",
                  // mobile: "(44) 123 1234 123",
                  // email: "alecthompson@mail.com",
                  // location: "USA",
                }}
                social={[
                  {
                    link: "https://www.facebook.com/CreativeTim/",
                    icon: <FacebookIcon />,
                    color: "facebook",
                  },
                  {
                    link: "https://twitter.com/spaceaiinc",
                    icon: <TwitterIcon />,
                    color: "twitter",
                  },
                  {
                    link: "https://www.instagram.com/spaceaiincofficial/",
                    icon: <InstagramIcon />,
                    color: "instagram",
                  },
                ]}
                action={{ route: "", tooltip: "" }}
                shadow={false}
                // signedUser={signedUser}
                profileUser={profileUser}
              />
            </Grid>
          </CustomBox>
          <CustomBox pt={2} px={2} lineHeight={1.25}>
            <CustomTypography variant="h6" fontWeight="medium">
              Projects
            </CustomTypography>
            <CustomBox mb={1}>
              <CustomTypography variant="button" color="text">
                Architects design houses
              </CustomTypography>
            </CustomBox>
          </CustomBox>
          <CustomBox p={2}>
            <Grid container spacing={6}>
              {contentList?.map((content, index) => (
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultProjectCard
                    image={homeDecor1}
                    // image={content.image}
                    label="project #2"
                    title={content.title}
                    description={content.description}
                    action={{
                      type: "internal",
                      route: "/pages/profile/profile-overview",
                      color: "info",
                      label: "view project",
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </CustomBox>
          {/* </Header> */}
        </Card>
      </CustomBox >
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
