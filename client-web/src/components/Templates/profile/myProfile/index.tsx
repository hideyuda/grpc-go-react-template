
// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";


import CustomBox from "components/Atomics/CustomBox";
import CustomTypography from "components/Atomics/CustomTypography";

// MUI examples components
import DashboardLayout from "components/Molecules/LayoutContainers/DashboardLayout";
import DashboardNavbar from "components/Molecules/Navbars/DashboardNavbar";
import Footer from "components/Molecules/Footer";
import ProfileInfoCard from "components/Molecules/Cards/InfoCards/ProfileInfoCard";
import DefaultProjectCard from "components/Molecules/Cards/ProjectCards/DefaultProjectCard";

// Data
import backgroundImage from "assets/images/bg-profile.jpeg";

// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";
import { useRecoilValue } from "recoil";
import { authrizedUserAtom } from "context/userAtom";
import { useEffect, useState } from "react";
import { UserServiceClient } from "pb/UserServiceClientPb";
import { User } from "pb/user_pb";
import breakpoints from "assets/theme/base/breakpoints";
import Card from "@mui/material/Card";
import CustomAvatar from "components/Atomics/CustomAvatar";
import { ContentServiceClient } from "pb/ContentServiceClientPb";
import { Content, ContentUserIdRequest } from "pb/content_pb";
import CustomButton from "components/Atomics/CustomButton";


// ProfileCard
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";
import { NotificationSettingServiceClient } from "pb/Notification_settingServiceClientPb";
import { NotificationSettingUserIdRequest } from "pb/notification_setting_pb";
import { Switch } from "@mui/material";

function MyProfile(): JSX.Element {
  const user = useRecoilValue(authrizedUserAtom)
  const [contentList, setContentList] = useState<Content.AsObject[] | null>(null)

  useEffect(() => {
    if (!user) {
      return
    }

    // notificationSetting
    const notificationClient = new NotificationSettingServiceClient(process.env.REACT_APP_ENVOY_URL)
    const notificationReq = new NotificationSettingUserIdRequest()
    notificationReq.setUserId(user.id)
    notificationClient.getByUser(notificationReq, {}, (err, res) => {
      if (err) {
        console.log(err)
      } else {
        const notificationSetting = res.toObject()
        setFollowNotification(notificationSetting.followed)
        setLikeNotification(notificationSetting.liked)
        setCommentNotification(notificationSetting.commented)
        setChatNotification(notificationSetting.chated)
        setNewsNotification(notificationSetting.news)
        setEventNotification(notificationSetting.event)
        setUpdateNotification(notificationSetting.update)
      }
    })

    // get content by user id
    const contentClient = new ContentServiceClient(process.env.REACT_APP_ENVOY_URL)
    const contentReq = new ContentUserIdRequest()
    contentReq.setUserId(user.id)
    contentClient.getListByUser(contentReq, {}, (err, res) => {
      if (err) {
      } else {
        setContentList(res.toObject().contentList)
      }
    })
  }, [])
  // header
  const [tabsOrientation, setTabsOrientation] = useState<"horizontal" | "vertical">("horizontal");

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

  /**
    * The profile info card data.
  */
  const [title, setTitle] = useState<string>("profile");
  const [description, setDescription] = useState<string>("");
  const [info, setInfo] = useState<{ [key: string]: string }>({});
  const [social, setSocial] = useState<{ [key: string]: any }[]>([]);
  const [shadow, setShadow] = useState<boolean>(false);

  const [followNotification, setFollowNotification] = useState<boolean>(false); // フォロー通知
  const [likeNotification, setLikeNotification] = useState<boolean>(false); // いいね通知
  const [commentNotification, setCommentNotification] = useState<boolean>(false); // コメント通知
  const [chatNotification, setChatNotification] = useState<boolean>(false); // チャット通知
  const [newsNotification, setNewsNotification] = useState<boolean>(false); // ニュース通知
  const [eventNotification, setEventNotification] = useState<boolean>(false); // イベント通知
  const [updateNotification, setUpdateNotification] = useState<boolean>(false); // アップデート通知

  useEffect(() => {
    if (!user) {
      return
    }

    // get user info
    setDescription(user.description)
    setSocial(user.mediaList)
    setFollowNotification(followNotification)
    setLikeNotification(likeNotification)
    setCommentNotification(commentNotification)
    setChatNotification(chatNotification)
    setNewsNotification(newsNotification)
    setEventNotification(eventNotification)
    setUpdateNotification(updateNotification)
  }, [user])

  const labels: string[] = [];
  const values: string[] = [];
  const { socialMediaColors } = colors;
  const { size } = typography;

  // Convert this form `objectKey` of the object key in to this `object key`
  Object.keys(info).forEach((el) => {
    if (el.match(/[A-Z\s]+/)) {
      const uppercaseLetter = Array.from(el).find((i) => i.match(/[A-Z]+/));
      const newElement = el.replace(uppercaseLetter, ` ${uppercaseLetter.toLowerCase()}`);

      labels.push(newElement);
    } else {
      labels.push(el);
    }
  });

  // Push the object values into the values array
  Object.values(info).forEach((el) => values.push(el));

  // Render the card info items
  const renderItems = labels.map((label, key) => (
    <CustomBox key={label} display="flex" py={1} pr={2}>
      <CustomTypography variant="button" fontWeight="bold" textTransform="capitalize">
        {label}: &nbsp;
      </CustomTypography>
      <CustomTypography variant="button" fontWeight="regular" color="text">
        &nbsp;{values[key]}
      </CustomTypography>
    </CustomBox>
  ));

  // Render the card social media icons
  const renderSocial = social.map(({ link, icon, color }) => (
    <CustomBox
      key={color}
      component="a"
      href={link}
      target="_blank"
      rel="noreferrer"
      fontSize={size.lg}
      color={socialMediaColors[color].main}
      pr={1}
      pl={0.5}
      lineHeight={1}
    >
      {icon}
    </CustomBox>
  ));


  const handleSaveProfile = () => {
    const client = new UserServiceClient(process.env.REACT_APP_ENVOY_URL)
    const req = new User()
    req.setUuid(user?.uuid)
    req.setDescription(description)
    // req.setMediaList(social)
    client.update(req, {}, (err, res) => {
      if (err) {
        console.log(err)
      } else {
        console.log(res)
      }
    }
    )
  }

  const handleDisplayProfile = () => {
    if (!user) {
      return
    }

    window.open(
      `/profile?uuid=${user?.uuid}`, '_blank')
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
                src={user?.photoUrl}
                alt="profile-image"
                size="xl" shadow="sm"
              />
            </Grid>
            <Grid item>
              <CustomBox height="100%" mt={0.5} lineHeight={1}>
                <CustomTypography variant="h5" fontWeight="medium">
                  {user?.name}
                </CustomTypography>
                {/* <CustomTypography variant="button" color="text" fontWeight="regular">
                CEO / Co-Founder
              </CustomTypography> */}
              </CustomBox>
            </Grid>
            {/* <Grid item xs={12} md={6} lg={4} sx={{ ml: "auto" }}>
            <AppBar position="static">
              <Tabs orientation={tabsOrientation} value={tabValue} onChange={handleSetTabValue}>
                <Tab
                  label="App"
                  icon={
                    <Icon fontSize="small" sx={{ mt: -0.25 }}>
                      home
                    </Icon>
                  }
                />
                <Tab
                  label="Message"
                  icon={
                    <Icon fontSize="small" sx={{ mt: -0.25 }}>
                      email
                    </Icon>
                  }
                />
                <Tab
                  label="Settings"
                  icon={
                    <Icon fontSize="small" sx={{ mt: -0.25 }}>
                      settings
                    </Icon>
                  }
                />
              </Tabs>
            </AppBar>
          </Grid> */}
          </Grid>
          <CustomBox mt={5} mb={3}>
            <Grid container spacing={1}>
              {/* <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}> */}
              <Divider orientation="vertical" sx={{ ml: -2 }} />
              <Card sx={{ height: "100%", boxShadow: !shadow && "none" }}>
                <CustomBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
                  <CustomTypography variant="h6" fontWeight="medium" textTransform="capitalize">
                    {title}
                  </CustomTypography>
                  {/* <CustomTypography component={Link} to={action.route} variant="body2" color="secondary">
                    {signedUser?.uuid === profileUser?.uuid && <Tooltip title={action.tooltip} placement="top"><Icon>edit</Icon></Tooltip>
                  </CustomTypography> */}
                </CustomBox>
                <CustomBox p={2}>
                  <CustomBox mb={2} lineHeight={1}>
                    <CustomTypography variant="button" color="text" fontWeight="light">
                      {description}
                    </CustomTypography>
                  </CustomBox>
                  <CustomBox opacity={0.3}>
                    <Divider />
                  </CustomBox>
                  <CustomBox>
                    {renderItems}
                  </CustomBox>
                  <CustomBox display="flex" py={1} pr={2}>
                    <CustomTypography variant="button" fontWeight="bold" textTransform="capitalize">
                      social: &nbsp;
                    </CustomTypography>
                    {renderSocial}
                  </CustomBox>
                </CustomBox>
              </Card>
              <Divider orientation="vertical" sx={{ mx: 0 }} />
            </Grid>
            <Grid item xs={12} md={6} xl={4}>
              <Card sx={{ boxShadow: "none" }}>
                <CustomBox p={2}>
                  <CustomTypography variant="h6" fontWeight="medium" textTransform="capitalize">
                    通知設定
                  </CustomTypography>
                </CustomBox>
                <CustomBox pt={1} pb={2} px={2} lineHeight={1.25}>
                  <CustomTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
                    account
                  </CustomTypography>
                  <CustomBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
                    <CustomBox mt={0.5}>
                      <Switch checked={followNotification} onChange={() => setFollowNotification(!followNotification)} />
                    </CustomBox>
                    <CustomBox width="80%" ml={0.5}>
                      <CustomTypography variant="button" fontWeight="regular" color="text">
                        フォローされた際に通知を受け取る
                      </CustomTypography>
                    </CustomBox>
                  </CustomBox>
                  <CustomBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
                    <CustomBox mt={0.5}>
                      <Switch checked={likeNotification} onChange={() => setLikeNotification(!likeNotification)} />
                    </CustomBox>
                    <CustomBox width="80%" ml={0.5}>
                      <CustomTypography variant="button" fontWeight="regular" color="text">
                        商品にいいねをされた際に通知を受け取る
                      </CustomTypography>
                    </CustomBox>
                  </CustomBox>
                  <CustomBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
                    <CustomBox mt={0.5}>
                      <Switch checked={commentNotification} onChange={() => setCommentNotification(!commentNotification)} />
                    </CustomBox>
                    <CustomBox width="80%" ml={0.5}>
                      <CustomTypography variant="button" fontWeight="regular" color="text">
                        商品にコメントをされた際に通知を受け取る
                      </CustomTypography>
                    </CustomBox>
                  </CustomBox>
                  <CustomBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
                    <CustomBox mt={0.5}>
                      <Switch checked={chatNotification} onChange={() => setChatNotification(!chatNotification)} />
                    </CustomBox>
                    <CustomBox width="80%" ml={0.5}>
                      <CustomTypography variant="button" fontWeight="regular" color="text">
                        チャット内でコメントされた際に通知を受け取る
                      </CustomTypography>
                    </CustomBox>
                  </CustomBox>
                  <CustomBox mt={3}>
                    <CustomTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
                      application
                    </CustomTypography>
                  </CustomBox>
                  <CustomBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
                    <CustomBox mt={0.5}>
                      <Switch checked={newsNotification} onChange={() => setNewsNotification(!newsNotification)} />
                    </CustomBox>
                    <CustomBox width="80%" ml={0.5}>
                      <CustomTypography variant="button" fontWeight="regular" color="text">
                        ニュースレター
                      </CustomTypography>
                    </CustomBox>
                  </CustomBox>
                  <CustomBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
                    <CustomBox mt={0.5}>
                      <Switch checked={eventNotification} onChange={() => setEventNotification(!eventNotification)} />
                    </CustomBox>
                    <CustomBox width="80%" ml={0.5}>
                      <CustomTypography variant="button" fontWeight="regular" color="text">
                        イベント情報
                      </CustomTypography>
                    </CustomBox>
                  </CustomBox>
                  <CustomBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
                    <CustomBox mt={0.5}>
                      <Switch checked={updateNotification} onChange={() => setUpdateNotification(!updateNotification)} />
                    </CustomBox>
                    <CustomBox width="80%" ml={0.5}>
                      <CustomTypography variant="button" fontWeight="regular" color="text">
                        アップデート情報
                      </CustomTypography>
                    </CustomBox>
                  </CustomBox>
                </CustomBox>
              </Card>
            </Grid>
            {/* <Grid item xs={12} xl={4}>
              <ProfilesList title="conversations" profiles={profilesListData} shadow={false} />
            </Grid> */}
            {/* </Grid> */}
            <CustomButton
              border={1} borderColor="black" color="dark" variant="outlined"
              onClick={handleDisplayProfile}
            >
              表示画面
            </CustomButton>
            <CustomButton border={1} borderColor="black" color="dark" variant="outlined" onClick={handleSaveProfile} ml={2}>
              保存
            </CustomButton>
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
                      route: "/pages/profile/my-profile",
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
    </DashboardLayout >
  );
}

export default MyProfile;

// Declaring default props for ProfileInfoCard
ProfileInfoCard.defaultProps = {
  shadow: true,
};