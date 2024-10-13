
import { ReactNode } from "react";

// @mui material components
import Icon from "@mui/material/Icon";
import { Theme } from "@mui/material/styles";


import CustomBox from "components/Atomics/CustomBox";
import CustomBadge from "components/Atomics/CustomBadge";
import CustomTypography from "components/Atomics/CustomTypography";
import CustomAvatar from "components/Atomics/CustomAvatar";
import CustomProgress from "components/Atomics/CustomProgress";
import { Grid } from "@mui/material";
import { ContentCategory, ContentTool } from "pb/content_pb";

// Declaring props types for Card
interface Props {
  image?: string;
  // badge: {
  //   color: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "dark" | "light";
  //   label: string;
  // };
  catgories?: ContentCategory.AsObject[];
  tools?: ContentTool.AsObject[];
  title: ReactNode;
  progress?: number;
  price?: string | number;
  like?: string | number;
  star?: string | number;
  review?: string | number;
}

function Card({ image, title, progress, price, like, star, review, catgories, tools }: Props): JSX.Element {
  // const renderMembers = members.map((member, key) => {
  //   const imageAlt = `image-${key}`;

  //   return (
  //     <CustomAvatar
  //       key={imageAlt}
  //       src={member}
  //       alt={imageAlt}
  //       size="xs"
  //       sx={{
  //         border: ({ borders: { borderWidth }, palette: { white } }: Theme) =>
  //           `${borderWidth[2]} solid ${white.main}`,
  //         cursor: "pointer",
  //         position: "relative",
  //         ml: -1,
  //         mr: 0,

  //         "&:hover, &:focus": {
  //           zIndex: "10",
  //         },
  //       }}
  //     />
  //   );
  // });

  return (
    <>
      <CustomBox
        display="flex"
        flexDirection="column"
        height="100%"
        bgColor="white"
        border={1}
        borderRadius="lg"
        borderColor="grey.300"
        p={2}
        m={1}
        shadow="sm">
        {image && <CustomBox component="img" src={image} width="100%" borderRadius="lg" mb={1} />}
        {/* {tools.map((tool, key) => {
          <CustomBadge size="xs" color='primary' badgeContent={tool.getTool()} container />
        })} */}
        <CustomBox display="flex" alignItems="center">
          {tools?.map((tool) => {
            const toolName = Object.entries(ContentTool.Tool).map((toolObj) =>
              toolObj[1] === tool.tool.valueOf() ? toolObj[0] : null
            );
            return <CustomBadge size="xs" color='inherit' badgeContent={toolName} container sx={{ mr: 1 }} />
          })}
          {/* <CustomBadge size="xs" color='primary' badgeContent='pended' container sx={{ mr: 1 }} />
          <CustomBadge size="xs" color='primary' badgeContent='pended' container sx={{ mr: 1 }} /> */}
        </CustomBox>
        <CustomBox mt={1} mb={2}>
          <CustomTypography variant="body2" color="text">
            {title} {price && <CustomTypography variant="body2" color="text" fontWeight="bold">{price}</CustomTypography>}
          </CustomTypography>
          {progress > 0 && (
            <CustomBox mt={0.25}>
              {/* <CustomProgress variant="gradient" value={progress} color={badge.color} /> */}
            </CustomBox>
          )}
        </CustomBox>
        <CustomBox display="flex" justifyContent="space-between" alignItems="center">
          <CustomBox display="flex" alignItems="center" color="text">
            {like && (
              <>
                <CustomTypography variant="body2" color="text" sx={{ lineHeight: 0 }}>
                  <Icon>favorite</Icon>
                </CustomTypography>
                <CustomTypography variant="button" fontWeight="regular" color="text">
                  &nbsp;{like}&nbsp;
                </CustomTypography>
              </>
            )}
            {/* </CustomBox> */}
            {/* <CustomBox display="flex" alignItems="left" color="text"> */}
            {star && (
              <>
                <CustomTypography variant="body2" color="text" sx={{ lineHeight: 0 }}>
                  &nbsp;
                  {star === 10 &&
                    <>
                      <Icon>star</Icon>
                      <Icon>star_outlined</Icon>
                      <Icon>star_outlined</Icon>
                      <Icon>star_outlined</Icon>
                      <Icon>star_outlined</Icon>
                    </>
                  }
                  {star === 15 &&
                    <>
                      <Icon>star</Icon>
                      <Icon>star_half</Icon>
                      <Icon>star_outlined</Icon>
                      <Icon>star_outlined</Icon>
                      <Icon>star_outlined</Icon>
                    </>
                  }
                  {star === 20 &&
                    <>
                      <Icon>star</Icon>

                      <Icon>star</Icon>
                      <Icon>star_outlined</Icon>
                      <Icon>star_outlined</Icon>
                      <Icon>star_outlined</Icon>
                    </>
                  }
                  {star === 25 &&
                    <>
                      <Icon>star</Icon>
                      <Icon>star</Icon>
                      <Icon>star_half</Icon>
                      <Icon>star_outlined</Icon>
                      <Icon>star_outlined</Icon>
                    </>
                  }
                  {star === 30 &&
                    <>
                      <Icon>star</Icon>
                      <Icon>star</Icon>
                      <Icon>star</Icon>
                      <Icon>star_outlined</Icon>
                      <Icon>star_outlined</Icon>
                    </>
                  }
                  {star === 35 &&
                    <>
                      <Icon>star</Icon>
                      <Icon>star</Icon>
                      <Icon>star</Icon>
                      <Icon>star_half</Icon>
                      <Icon>star_outlined</Icon>
                    </>
                  }
                  {star === 40 &&
                    <>
                      <Icon>star</Icon>
                      <Icon>star</Icon>
                      <Icon>star</Icon>
                      <Icon>star</Icon>
                      <Icon>star_outlined</Icon>
                    </>
                  }
                  {star === 45 &&
                    <>
                      <Icon>star</Icon>
                      <Icon>star</Icon>
                      <Icon>star</Icon>
                      <Icon>star</Icon>
                      <Icon>star_half</Icon>
                    </>
                  }
                  {star === 50 &&
                    <>
                      <Icon>star</Icon>
                      <Icon>star</Icon>
                      <Icon>star</Icon>
                      <Icon>star</Icon>
                      <Icon>star</Icon>
                    </>
                  }
                </CustomTypography>
                <CustomTypography variant="button" fontWeight="regular" color="text">
                  &nbsp;({review || 0})&nbsp;
                </CustomTypography>
              </>
            )}
          </CustomBox>
          {/* <CustomBox display="flex">{renderMembers}</CustomBox> */}
        </CustomBox>
      </CustomBox>
    </>
  );
}

// Declaring default props for Card
Card.defaultProps = {
  image: "",
  progress: 0,
  like: "",
};

export default Card;
