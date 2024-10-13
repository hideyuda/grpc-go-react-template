

// @mui material components
import Grid from "@mui/material/Grid";


import CustomBox from "components/Atomics/CustomBox";
import CustomTypography from "components/Atomics/CustomTypography";
import CustomButton from "components/Atomics/CustomButton";
import CustomBadge from "components/Atomics/CustomBadge";

// pb
import { Content } from "pb/content_pb";

// react-router-dom components
import { Link } from "react-router-dom";
import ReviewCell from "components/Templates/content/contentDetail/components/ReviewCell";

function ContentInfo(
  props: {
    content: Content.AsObject
    asp: string
  }
): JSX.Element {

  return (
    <CustomBox>
      <CustomBox mb={1}>
        <CustomTypography variant="h3" fontWeight="bold">
          {props.content?.title}
        </CustomTypography>
      </CustomBox>
      <ReviewCell rating={props.content?.starRate / 10} />
      <CustomBox mt={1}>
        <CustomTypography variant="h6" fontWeight="medium">
          Price
        </CustomTypography>
      </CustomBox>
      <CustomBox mb={1}>
        <CustomTypography variant="h5" fontWeight="medium">
          ${props.content?.price}
        </CustomTypography>
      </CustomBox>
      <CustomBadge variant="contained" color="success" badgeContent="in stock" container />
      <CustomBox mt={3} mb={1} ml={0.5}>
        <CustomTypography variant="button" fontWeight="regular" color="text">
          Description
        </CustomTypography>
      </CustomBox>
      <CustomBox m={0} pl={4} mb={2} fontSize="1.25rem" lineHeight={1}>
        <CustomTypography variant="button" color="text" fontWeight="regular" verticalAlign="middle">
          {props.content?.description}
        </CustomTypography>
      </CustomBox>
      {/* <CustomBox component="ul" m={0} pl={4} mb={2}>
        <CustomBox component="li" color="text" fontSize="1.25rem" lineHeight={1}>
          <CustomTypography variant="body2" color="text" fontWeight="regular" verticalAlign="middle">
            The most beautiful curves of this swivel stool adds an elegant touch to any environment
          </CustomTypography>
        </CustomBox>
        <CustomBox component="li" color="text" fontSize="1.25rem" lineHeight={1}>
          <CustomTypography variant="body2" color="text" fontWeight="regular" verticalAlign="middle">
            Memory swivel seat returns to original seat position
          </CustomTypography>
        </CustomBox>
        <CustomBox component="li" color="text" fontSize="1.25rem" lineHeight={1}>
          <CustomTypography variant="body2" color="text" fontWeight="regular" verticalAlign="middle">
            Comfortable integrated layered chair seat cushion design
          </CustomTypography>
        </CustomBox>
        <CustomBox component="li" color="text" fontSize="1.25rem" lineHeight={1}>
          <CustomTypography variant="body2" color="text" fontWeight="regular" verticalAlign="middle">
            Fully assembled! No assembly required
          </CustomTypography>
        </CustomBox>
      </CustomBox> */}
      {/* <CustomBox mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={5}>
            <CustomBox mb={1.5} lineHeight={0} display="inline-block">
              <CustomTypography component="label" variant="button" color="text" fontWeight="regular">
                Frame Material
              </CustomTypography>
            </CustomBox>
            <Autocomplete
              defaultValue="Steel"
              options={["Aluminium", "Carbon", "Steel", "Wood"]}
              renderInput={(params) => <CustomInput {...params} variant="standard" />}
            />
          </Grid>
          <Grid item xs={12} lg={5}>
            <CustomBox mb={1.5} lineHeight={0} display="inline-block">
              <CustomTypography component="label" variant="button" color="text" fontWeight="regular">
                Color
              </CustomTypography>
            </CustomBox>
            <Autocomplete
              defaultValue="White"
              options={["Black", "Blue", "Grey", "Pink", "Red", "White"]}
              renderInput={(params) => <CustomInput {...params} variant="standard" />}
            />
          </Grid>
          <Grid item xs={12} lg={2}>
            <CustomBox mb={1.5} lineHeight={0} display="inline-block">
              <CustomTypography component="label" variant="button" color="text" fontWeight="regular">
                Quantity
              </CustomTypography>
            </CustomBox>
            <CustomInput inputProps={{ type: "number" }} defaultValue={1} variant="standard" />
          </Grid>
        </Grid>
      </CustomBox> */}
      <CustomBox mt={3}>
        <Grid item xs={12} lg={5} container>
          <Link to={`/content/order?uuid=${props.content?.uuid}&invite=${props.asp}`}>
          <CustomButton
            variant="gradient"
            color="info"
              fullWidth
            >
            Buy Now
            </CustomButton>
          </Link>
        </Grid>
      </CustomBox>
    </CustomBox >
  );
}

export default ContentInfo;
